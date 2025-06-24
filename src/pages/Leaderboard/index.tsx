import { Trans } from "@lingui/macro";
import { useWeb3React } from "@web3-react/core";
import { ButtonPrimary } from "components/Button";
import { useLeaderboard, useUserHistoricalData } from "hooks/useLeaderboard";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme, keyframes } from "styled-components";
import { ThemedText } from "theme/components";
import { PageWrapper as SwapPageWrapper } from "components/swap/styled";
import { TrendingUp, Info, BarChart, Users } from "react-feather";
import * as d3 from "d3";
import StatusIcon from "components/Identicon/StatusIcon";
import { getConnection } from "connection";
import { Connection } from "connection/types";
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { MouseoverTooltip } from "components/Tooltip";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Layout con tema app moderno
const PageWrapper = styled(SwapPageWrapper)`
  max-width: 1400px;
  min-height: 100vh;
  padding: 68px 24px 24px;
  background: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    padding: 68px 16px 16px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// Left Sidebar con tema moderno
const Sidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: ${({ theme }) => theme.surface1};
  z-index: 1;
  max-height: calc(100vh - 120px);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle at top left,
      rgba(168, 85, 247, 0.4) 0%,
      rgba(124, 58, 237, 0.3) 40%,
      rgba(168, 85, 247, 0.05) 80%,
      transparent 100%
    );
    filter: blur(35px);
    z-index: 0;
    pointer-events: none;
    border-radius: 50%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      transparent 60deg,
      #a855f7 90deg,
      #7c3aed 180deg,
      #a855f7 230deg,
      transparent 300deg,
      transparent 360deg
    );
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    z-index: 2;
    pointer-events: none;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  overflow-y: auto;
  flex: 1;
  position: relative;
  z-index: 1;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const SectionTitle = styled(ThemedText.SubHeader)`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.neutral1};
  font-weight: 600;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

const UserItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${({ theme }) => theme.surface2};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.surface3};
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: ${({ theme }) => theme.surface3};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: inherit;
  }
`;

const RankPosition = styled.div<{ $rank: number }>`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  box-shadow: ${({ $rank, theme }) =>
  $rank === 1
    ? `0 0 8px ${theme.accent1}`
    : $rank === 2
    ? `0 0 6px #C0C0C0`
    : $rank === 3
    ? `0 0 6px #CD7F32`
    : 'none'};
  background: ${({ theme, $rank }) => {
    if ($rank === 1)
      return `linear-gradient(135deg, ${theme.accent1}, ${theme.accent2})`;
    if ($rank === 2) return `linear-gradient(135deg, #C0C0C0, #E8E8E8)`;
    if ($rank === 3) return `linear-gradient(135deg, #CD7F32, #FFB347)`;
    return theme.surface3;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme, $rank }) =>
    $rank <= 3 ? theme.surface1 : theme.neutral1};
  flex-shrink: 0;

  &::before {
    content: "${({ $rank }) => {
      if ($rank === 1) return "👑";
      if ($rank === 2) return "🥈";
      if ($rank === 3) return "🥉";
      return $rank.toString();
    }}";
  }
`;

const UserMainInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const PerformanceStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
  min-width: 80px;
`;

const SidebarVolumeAmount = styled(ThemedText.BodySmall)`
  font-weight: 700;
  color: #fff;
text-shadow: 0 0 6px ${({ theme }) => theme.accent1};
  font-size: 14px;
`;

const PerformanceChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ $positive, theme }) =>
    $positive ? theme.success : theme.critical};

  &::before {
    content: "${({ $positive }) => ($positive ? "📈" : "📉")}";
    font-size: 10px;
  }
`;

const WalletIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ theme }) => theme.surface2};
  border: 2px solid ${({ theme }) => theme.surface3};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Override StatusIcon margin */
  & > div {
    margin-right: 0 !important;
  }
`

const UserDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const WalletAddress = styled(ThemedText.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VolumeText = styled(ThemedText.LabelMicro)`
  color: ${({ theme }) => theme.neutral2};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


// Main Content Area con tema moderno
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    order: 1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContestTitle = styled(ThemedText.HeadlineMedium)`
  color: ${({ theme }) => theme.neutral1};
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContestDescription = styled(ThemedText.BodyPrimary)`
  color: ${({ theme }) => theme.neutral2};
  margin: 8px 0 0 0;
  font-size: 16px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;


// Tree Map Container più compatto
const TreeMapContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 24px;
  background: ${({ theme }) => theme.surface1};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    background: conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      transparent 45deg,
      #a855f7 80deg,
      #7c3aed 120deg,
      #a855f7 180deg,
      transparent 315deg,
      transparent 360deg
    );
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0) border-box;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    z-index: -1;
    pointer-events: none;
  }
`;

const TreeMapWrapper = styled.div<{ $dynamicHeight: number }>`
  width: 100%;
  height: ${({ $dynamicHeight }) => $dynamicHeight}px;
  min-height: 500px;
  max-height: 1200px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.surface2};
  border: 1px solid ${({ theme }) => theme.surface3};

  @media (max-width: 768px) {
    height: ${({ $dynamicHeight }) => Math.min($dynamicHeight * 0.9, 800)}px;
    min-height: 400px;
    max-height: 800px;
  }
`;

// Calculate dynamic height based on number of wallets and optimal treemap layout
const calculateTreemapHeight = (walletCount: number): number => {
  if (walletCount === 0) return 500;
  
  // Base calculation: more wallets need more height
  // Using a more aggressive scaling for better visibility
  const baseHeight = 500 + Math.log(walletCount) * 120;
  
  // Additional height for better visibility with many wallets
  const additionalHeight = Math.min(walletCount * 8, 400);
  
  const calculatedHeight = baseHeight + additionalHeight;
  
  // Clamp between min and max values with higher limits
  return Math.max(500, Math.min(calculatedHeight, 1200));
};

// Treemap D3 Component
const TreemapNode = styled.div<{ 
  $x: number
  $y: number
  $width: number
  $height: number
  $rank: number
  $volume: number
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: ${({ $rank, theme }) => {
  if ($rank === 1) {
    return `linear-gradient(135deg, #5821B7, #000)`; // viola acceso
  }
  if ($rank === 2) {
    return `linear-gradient(135deg, #D1D5DB, #000)`; // argento
  }
  if ($rank === 3) {
    return `linear-gradient(135deg, #F97316, #000)`; // bronzo-arancio
  }
  return 'linear-gradient(135deg, #1F2937, #000)'; // grigio scuro per altri
}};
box-shadow: ${({ $rank }) => {
  if ($rank === 1) return `0 0 12px #8B5CF6aa`;
  if ($rank === 2) return `0 0 10px #D1D5DBcc`;
  if ($rank === 3) return `0 0 10px #F97316cc`;
  return `inset 0 0 6px rgba(255,255,255,0.05)`; // glow soft per altri
}};
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;
  animation-delay: ${({ $rank }) => $rank * 0.1}s;
  animation-fill-mode: both;
  opacity: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    z-index: 10;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background: ${({ $rank, theme }) => {
      if ($rank === 1) {
        return `linear-gradient(135deg, #5821B7, #000)`;
      }
      if ($rank === 2) {
        return `linear-gradient(135deg, #D1D5DB, #000)`;
      }
      if ($rank === 3) {
        return `linear-gradient(135deg, #F97316, #000)`;
      }
      return 'linear-gradient(135deg, #1F2937, #000)';
    }};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.accent1}08, 
      ${({ theme }) => theme.accent1}02
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 16px;
  }
  
  &:hover::before {
    opacity: 1;
  }
`

const NodeHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const WalletInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
`;

const WalletAvatar = styled.div<{ $rank: number }>`
  width: ${({ $rank }) => $rank <= 3 ? '36px' : '28px'};
  height: ${({ $rank }) => $rank <= 3 ? '36px' : '28px'};
  border-radius: 10px;
  background: ${({ theme }) => theme.surface2};
  border: 2px solid ${({ theme }) => theme.surface3};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* Override StatusIcon margin */
  & > div {
    margin-right: 0 !important;
  }
`

const WalletDetails = styled.div`
  min-width: 0;
  flex: 1;
`;

const WalletAddressStyled = styled(ThemedText.BodySmall)`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const RankBadge = styled.div<{ $rank: number }>`
  background: ${({ theme, $rank }) => {
    if ($rank === 1) return `linear-gradient(135deg, ${theme.accent1}, ${theme.accent2})`
    if ($rank === 2) return `linear-gradient(135deg, #C0C0C0, #E8E8E8)`
    if ($rank === 3) return `linear-gradient(135deg, #CD7F32, #FFB347)`
    return theme.surface3
  }};
  color: ${({ theme, $rank }) => 
    $rank <= 3 ? theme.surface1 : theme.neutral1
  };
  padding: 4px 8px;
  text-shadow: ${({ $rank, theme }) =>
  $rank <= 3 ? `0 0 6px ${theme.accent1}` : 'none'};
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  min-width: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`

const VolumeDisplay = styled.div`
  margin-top: auto;
`;

const VolumeAmount = styled(ThemedText.SubHeader)`
 color: #fff;
text-shadow: 0 0 6px ${({ theme }) => theme.accent1};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 2px;
  line-height: 1.2;
`;


// Mini chart component for larger nodes
const MiniChart = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 40%;
  height: 25%;
  opacity: ${({ $visible }) => ($visible ? 0.6 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

// Treemap component using D3
interface TreemapComponentProps {
  users: any[];
  totalVolume: number;
  width: number;
  height: number;
  connection: Connection;
}

const TreemapComponent = ({
  users,
  totalVolume,
  width,
  height,
  connection,
}: TreemapComponentProps) => {
  const theme = useTheme();

  const treemapData = useMemo(() => {
    if (!users || users.length === 0) return [];

    const data = users.map((user, index) => {
      const volume = parseFloat(user.totalVolumeUSD || "0");

      return {
        id: user.id,
        originalValue: volume,
        rank: index + 1,
        percentage:
          totalVolume > 0 ? ((volume / totalVolume) * 100).toFixed(2) : "0.00",
      };
    });

    // Normalizzazione per evitare che il primo valore domini troppo
    const values = data.map((d) => d.originalValue).filter((v) => v > 0);
    if (values.length === 0) return [];

    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue;

    // Applica una scala logaritmica bilanciata per tutti i nodi con dimensioni minime garantite
    const normalizedData = data.map((d) => {
      let normalizedValue;

      if (d.originalValue <= 0) {
        normalizedValue = 100; // Valore base più alto per volumi zero
      } else if (d.rank === 1) {
        // Il primo nodo deve essere più grande ma non dominante
        normalizedValue = Math.log(d.originalValue + 1) * 90 + 400;
      } else if (d.rank <= 3) {
        // Top 3 con buona visibilità
        normalizedValue = Math.log(d.originalValue + 1) * 80 + 250;
      } else if (d.rank <= 10) {
        // Top 10 con dimensioni decenti
        normalizedValue = Math.log(d.originalValue + 1) * 70 + 180;
      } else {
        // Altri nodi con dimensione minima garantita per leggibilità
        normalizedValue = Math.log(d.originalValue + 1) * 60 + 120;
      }

      return {
        ...d,
        value: normalizedValue,
      };
    });

    // Use D3 treemap layout con valori normalizzati
    const root = d3
      .hierarchy({ children: normalizedData })
      .sum((d) => (d as any).value)
      .sort((a, b) => ((a as any).rank || 0) - ((b as any).rank || 0)); // Ordina per rank, non per valore

    const treemap = d3
      .treemap<any>()
      .size([width, height])
      .padding(6)
      .paddingInner(8)
      .paddingOuter(16)
      .round(true);

    treemap(root);

    return (root.leaves() as any[]).map((d: any) => ({
      ...d.data,
      x: d.x0,
      y: d.y0,
      width: Math.max(d.x1 - d.x0, 120), // Dimensione minima aumentata per leggibilità
      height: Math.max(d.y1 - d.y0, 80), // Altezza minima aumentata per testi
    }));
  }, [users, totalVolume, width, height]);

  const formatUserAddress = (address: string) => {
    if (!address) return "0x...";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return (volume / 1000000).toFixed(2) + "M";
    if (volume >= 1000) return (volume / 1000).toFixed(2) + "K";
    return volume.toFixed(2);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {treemapData.map((node: any) => (
        <TreemapNode
          key={node.id}
          $x={node.x}
          $y={node.y}
          $width={node.width}
          $height={node.height}
          $rank={node.rank}
          $volume={node.originalValue}
          as={Link}
          to={`/leaderboard/profile/${node.id}`}
        >
         <NodeHeader>
  <WalletInfo>
    <WalletAvatar $rank={node.rank}>
      <StatusIcon account={node.id} connection={connection} size={node.rank <= 3 ? 36 : 28} showMiniIcons={false} />
    </WalletAvatar>
    {node.width > 120 && (
      <WalletDetails>
        <WalletAddressStyled>
          {formatUserAddress(node.id)}
        </WalletAddressStyled>
      </WalletDetails>
    )}
  </WalletInfo>
  <RankBadge $rank={node.rank}>
    #{node.rank}
  </RankBadge>
</NodeHeader>

          {node.height > 60 && (
            <VolumeDisplay>
              <VolumeAmount>${formatVolume(node.originalValue)}</VolumeAmount>
            </VolumeDisplay>
          )}

          <MiniChart $visible={node.width > 140 && node.height > 100}>
            <UserChart userId={node.id} color={theme.accent1} />
          </MiniChart>
        </TreemapNode>
      ))}
    </div>
  );
};

// Chart component for user transactions using real data

const UserChart = ({
  userId,
  color = "rgba(255,255,255,0.8)",
}: {
  userId: string;
  color?: string;
}) => {
  const { data: historicalData } = useUserHistoricalData(userId, 7);

  const chartData = useMemo(() => {
    // Calcola gli ultimi 7 giorni precisi usando timestamp
    const now = new Date();
    const last7Days = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      date.setUTCHours(0, 0, 0, 0);
      last7Days.push(Math.floor(date.getTime() / 1000));
    }

    if (!historicalData || historicalData.length === 0) {
      // Fallback: crea pattern di crescita per 7 giorni anche senza dati reali
      return last7Days.map((timestamp, index) => ({
        index,
        value: 20 + (index * 10), // Pattern crescente base
        timestamp,
        volume: 0,
      }));
    }

    // Crea mappa dei dati esistenti per timestamp
    const dataMap = new Map();
    historicalData.forEach((d) => {
      const dayTimestamp = d.date || 0;
      dataMap.set(dayTimestamp, parseFloat(d.dailyVolumeUSD || "0"));
    });

    // Calcola volume cumulativo per esattamente gli ultimi 7 giorni
    let cumulativeVolume = 0;
    const last7DaysData = last7Days.map((timestamp) => {
      const dailyVolume = dataMap.get(timestamp) || 0; // 0 se nessun movimento
      cumulativeVolume += dailyVolume;
      return {
        timestamp,
        dailyVolume,
        cumulativeVolume,
      };
    });

    // Normalizza per il chart (crescita cumulativa)
    const maxCumulativeVolume = Math.max(...last7DaysData.map(d => d.cumulativeVolume), 1);
    
    const points = last7DaysData.map((day, index) => {
      // Se non c'è volume, la linea rimane piatta rispetto al punto precedente
      // Se c'è volume, cresce proporzionalmente
      const normalizedY = maxCumulativeVolume > 0
        ? 20 + ((day.cumulativeVolume / maxCumulativeVolume) * 60)
        : 20 + (index * 2); // Crescita minima anche senza dati
        
      return {
        index,
        value: Math.max(20, Math.min(80, normalizedY)),
        timestamp: day.timestamp,
        volume: day.cumulativeVolume,
        dailyVolume: day.dailyVolume,
      };
    });

    return points;
  }, [historicalData]);

  // Convert color to hex if it's rgba for better Recharts compatibility
  const getHexColor = (colorString: string) => {
    if (colorString.startsWith('rgba(255,255,255')) {
      return '#ffffff';
    }
    if (colorString.startsWith('rgba(')) {
      // Extract RGB values and convert to hex
      const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]).toString(16).padStart(2, '0');
        const g = parseInt(match[2]).toString(16).padStart(2, '0');
        const b = parseInt(match[3]).toString(16).padStart(2, '0');
        return `#${r}${g}${b}`;
      }
    }
    return colorString;
  };

  const hexColor = getHexColor(color);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id={`lineGradient-${userId}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={hexColor} stopOpacity={0.8} />
              <stop offset="50%" stopColor={hexColor} stopOpacity={1} />
              <stop offset="100%" stopColor={hexColor} stopOpacity={0.6} />
            </linearGradient>
            
            <filter id={`glow-${userId}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <Line
            type="monotone"
            dataKey="value"
            stroke={`url(#lineGradient-${userId})`}
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 4,
              fill: hexColor,
              stroke: hexColor,
              strokeWidth: 2,
              filter: `url(#glow-${userId})`,
            }}
            filter={`url(#glow-${userId})`}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Component per calcolare performance reali di un utente
const UserPerformanceData = ({
  userId,
  currentVolume,
  children,
}: {
  userId: string;
  currentVolume?: number;
  children: (data: { change24h: number; change7d: number }) => React.ReactNode;
}) => {
  const { data: historicalData } = useUserHistoricalData(userId, 7);

  const performanceData = useMemo(() => {
    console.log(
      "UserPerformanceData - userId:",
      userId,
      "historicalData:",
      historicalData,
      "currentVolume:",
      currentVolume
    );

    // Se non abbiamo dati storici sufficienti
    if (!historicalData || historicalData.length === 0) {
      console.log("No historical data available");
      if (currentVolume && currentVolume > 0) {
        // Se c'è volume attuale ma nessun dato storico, significa che è il primo giorno
        // Non possiamo calcolare una crescita percentuale senza punto di confronto
        // Ma se è il primo giorno di attività, potremmo considerarlo come 100% o N/A
        return { change24h: 0, change7d: 0 }; // o return { change24h: null, change7d: null }
      }
      return { change24h: 0, change7d: 0 };
    }

    // Converti i dati e ordina per data (più vecchio prima per calcolare cumulative)
    const sortedDataByDate = [...historicalData]
      .map((d) => ({
        ...d,
        dailyVolume: parseFloat(d.dailyVolumeUSD || "0"),
        timestamp: d.date || 0,
      }))
      .sort((a, b) => a.timestamp - b.timestamp); // Ordina dal più vecchio al più recente

    // Calcola il volume cumulativo per ogni giorno
    let cumulativeVolume = 0;
    const dataWithCumulative = sortedDataByDate.map((d) => {
      cumulativeVolume += d.dailyVolume;
      return {
        ...d,
        totalVolume: cumulativeVolume,
      };
    });

    // Ora ordina per data (più recente prima) per i calcoli
    const sortedData = dataWithCumulative.sort(
      (a, b) => b.timestamp - a.timestamp
    );

    console.log(
      "Sorted data:",
      sortedData.slice(0, 7).map((d) => ({
        date: d.timestamp,
        formattedDate: new Date(d.timestamp * 1000).toISOString(),
        totalVolume: d.totalVolume,
        dailyVolume: d.dailyVolume,
      }))
    );

    // Per il calcolo delle percentuali, usa il volume totale
    // Se currentVolume è fornito, usalo, altrimenti usa l'ultimo calcolato
    const currentTotalVolume = currentVolume ?? sortedData[0]?.totalVolume ?? 0;

    let change24h = 0;
    let change7d = 0;

    // Calcolo 24h - confronta volume totale attuale con quello di ieri
    if (sortedData.length >= 2) {
      const yesterdayTotalVolume = sortedData[1].totalVolume;

      if (yesterdayTotalVolume === 0 && currentTotalVolume > 0) {
        // Da zero a qualcosa = crescita infinita, ma mostriamo 100%
        change24h = 100;
      } else if (yesterdayTotalVolume > 0) {
        // Calcolo percentuale normale: (nuovo - vecchio) / vecchio * 100
        change24h =
          ((currentTotalVolume - yesterdayTotalVolume) / yesterdayTotalVolume) *
          100;
      } else {
        // Entrambi zero = nessun cambiamento
        change24h = 0;
      }
    } else if (sortedData.length === 1 && currentTotalVolume > 0) {
      // Se abbiamo solo un dato e c'è volume, significa crescita da 0
      change24h = 100;
    }

    // Calcolo 7d - confronta volume totale attuale con quello di una settimana fa
    if (sortedData.length >= 7) {
      const weekAgoTotalVolume = sortedData[6].totalVolume;

      if (weekAgoTotalVolume === 0 && currentTotalVolume > 0) {
        // Da zero a qualcosa = crescita infinita, ma mostriamo 100%
        change7d = 100;
      } else if (weekAgoTotalVolume > 0) {
        // Calcolo percentuale normale
        change7d =
          ((currentTotalVolume - weekAgoTotalVolume) / weekAgoTotalVolume) *
          100;
      } else {
        // Entrambi zero = nessun cambiamento
        change7d = 0;
      }
    } else if (sortedData.length >= 2) {
      // Se non abbiamo 7 giorni di dati, estrapola dal trend disponibile
      const dailyGrowthRate = change24h / 100; // converti in decimale

      // Estrapola per 7 giorni (formula composta)
      if (dailyGrowthRate !== 0) {
        change7d = (Math.pow(1 + dailyGrowthRate, 7) - 1) * 100;
      }
    } else if (sortedData.length === 1 && currentTotalVolume > 0) {
      // Se abbiamo solo un dato e c'è volume, significa crescita da 0
      change7d = 100;
    }

    // Limita i valori a un range ragionevole
    change24h = Math.max(-99, Math.min(change24h, 1000)); // Non può scendere sotto -99%
    change7d = Math.max(-99, Math.min(change7d, 2000)); // Non può scendere sotto -99%

    const result = {
      change24h: Math.round(change24h * 100) / 100,
      change7d: Math.round(change7d * 100) / 100,
    };

    console.log("Performance result:", {
      ...result,
      dataPoints: sortedData.length,
      currentTotal: currentTotalVolume,
      yesterdayTotal: sortedData[1]?.totalVolume,
      weekAgoTotal: sortedData[6]?.totalVolume,
      currentVolumeParam: currentVolume,
    });

    return result;
  }, [historicalData, userId, currentVolume]);

  return children(performanceData);
};

// Utility functions
const formatUserAddress = (address: string) => {
  if (!address) return "0x...";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const formatVolume = (volume: number) => {
  if (volume >= 1000000) return (volume / 1000000).toFixed(2) + "M";
  if (volume >= 1000) return (volume / 1000).toFixed(2) + "K";
  return volume.toFixed(2);
};

const calculatePercentage = (userVolume: string, totalVolume: number) => {
  const volume = parseFloat(userVolume) || 0;
  if (totalVolume === 0) return "0.00%";
  return ((volume / totalVolume) * 100).toFixed(2) + "%";
};

export default function Leaderboard() {
  const { account, connector } = useWeb3React();
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("Top20");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 800,
    height: 720,
  });

  // Get current connection for StatusIcon
  const connection = getConnection(connector);

  const {
    users: allTimeUsers,
    loading: allTimeLoading,
    error: allTimeError,
  } = useLeaderboard(50);

  // Update container dimensions when ref changes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerDimensions({
          width: clientWidth || 600,
          height: Math.max(clientHeight - 48, 500), // Dimensioni più compatte
        });
      }
    };

    updateDimensions();

    const handleResize = () => updateDimensions();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentUsers = allTimeUsers;
  const isLoading = allTimeLoading;
  const error = allTimeError;

  // Take top 30 users for the tree map (increased from 20)
  const topUsers = useMemo(() => {
    if (!currentUsers || currentUsers.length === 0) return [];
    return currentUsers.slice(0, 30);
  }, [currentUsers]);

  // Calculate total volume for percentage calculations
  const totalVolume = useMemo(() => {
    if (!topUsers || topUsers.length === 0) return 0;
    return topUsers.reduce((sum: number, user: any) => {
      const volume = parseFloat((user as any).totalVolumeUSD || "0");
      return sum + volume;
    }, 0);
  }, [topUsers]);

  // Process users for sidebar (complete leaderboard)
  const sidebarUsers = useMemo(() => {
    if (!topUsers || topUsers.length === 0) return [];

    return topUsers.slice(0, 10).map((user, index) => {
      const volume = parseFloat((user as any).totalVolumeUSD || "0");

      return {
        address: user.id,
        rank: index + 1,
        volume: formatVolume(volume),
        rawVolume: volume,
        percentage: calculatePercentage(
          (user as any).totalVolumeUSD,
          totalVolume
        ),
        // Add current volume for fallback performance calculation
        currentVolume: volume,
      };
    });
  }, [topUsers, totalVolume]);

  // Calculate dynamic height for treemap
  const dynamicHeight = useMemo(() => {
    return calculateTreemapHeight(topUsers.length);
  }, [topUsers.length]);

  return (
    <PageWrapper>
      <Container>        {/* Left Sidebar */}
        <Sidebar>
          <SidebarContent>
            <SectionHeader>
              <SectionTitle>
                <BarChart size={18} />
                Leaderboard
              </SectionTitle>
              <MouseoverTooltip
                text={
                  <div>
                    Ranking of users who generated the most volume.<br />
                    Higher rankings increase your chances for airdrops!
                  </div>
                }
                placement="right"
              >
                <Info size={16} color="#888" style={{ cursor: 'help' }} />
              </MouseoverTooltip>
            </SectionHeader>

            <UserList>
              {sidebarUsers.map((trader) => (
                <UserPerformanceData
                  key={trader.address}
                  userId={trader.address}
                  currentVolume={trader.rawVolume}
                >
                  {(performanceData) => (
                    <UserItem to={`/leaderboard/profile/${trader.address}`}>
                     <UserMainInfo>
        <RankPosition $rank={trader.rank} />
        <WalletIcon>
          <StatusIcon account={trader.address} connection={connection} size={40} showMiniIcons={false} />
        </WalletIcon>
        <UserDetails>
          <WalletAddress>{formatUserAddress(trader.address)}</WalletAddress>
          <VolumeText>${trader.volume}</VolumeText>
        </UserDetails>
      </UserMainInfo>
                      <PerformanceStats>
                        <SidebarVolumeAmount>
                          ${trader.volume}
                        </SidebarVolumeAmount>
                        <PerformanceChange
                          $positive={performanceData.change24h > 0}
                        >
                          {performanceData.change24h > 0 ? "+" : ""}
                          {performanceData.change24h.toFixed(1)}%
                        </PerformanceChange>
                      </PerformanceStats>
                    </UserItem>
                  )}
                </UserPerformanceData>
              ))}
            </UserList>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          <Header>
            <HeaderLeft>
              <HeaderContent>
                <ContestTitle>
                  <TrendingUp size={24} />
                  Volume Contest
                </ContestTitle>
                <ContestDescription>
                  Compete with other traders to climb the leaderboard. Higher rankings increase your chances for future airdrops and exclusive rewards!
                </ContestDescription>
              </HeaderContent>
            </HeaderLeft>
          </Header>

          <TreeMapContainer ref={containerRef}>
            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "400px",
                  color: "#9ca3af",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "24px 32px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderTop: "2px solid currentColor",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                  Loading leaderboard...
                </div>
              </div>
            ) : error ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "400px",
                  color: "#ef4444",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "24px 32px",
                    background: "rgba(239, 68, 68, 0.1)",
                    borderRadius: "16px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                  }}
                >
                  ⚠️ Error loading data: {error}
                </div>
              </div>
            ) : (
              <TreeMapWrapper $dynamicHeight={dynamicHeight}>
                <TreemapComponent
                  users={topUsers}
                  totalVolume={totalVolume}
                  width={containerDimensions.width - 48} // Sottraiamo il padding del container
                  height={dynamicHeight - 48} // Usa l'altezza dinamica meno il padding
                  connection={connection}
                />
              </TreeMapWrapper>
            )}
          </TreeMapContainer>
        </MainContent>
      </Container>
    </PageWrapper>
  );
}
