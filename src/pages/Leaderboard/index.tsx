import { Trans } from "@lingui/macro";
import { useWeb3React } from "@web3-react/core";
import { ButtonPrimary } from "components/Button";
import { useLeaderboard, useUserHistoricalData } from "hooks/useLeaderboard";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme, keyframes } from "styled-components";
import { ThemedText } from "theme/components";
import { PageWrapper as SwapPageWrapper } from "components/swap/styled";
import { TrendingUp, Info, BarChart, Users, Grid, List, Filter, Eye } from "react-feather";
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

// NEW: Controls for filtering and view mode
const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  flex-shrink: 0;
`;

const ViewModeToggle = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  background: ${({ theme }) => theme.surface2};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.surface3};
`;

const ViewModeButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: ${({ $active, theme }) => $active ? theme.accent1 : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.surface1 : theme.neutral2};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.accent1 : theme.surface3};
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterLabel = styled(ThemedText.LabelMicro)`
  color: ${({ theme }) => theme.neutral2};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FilterSlider = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.surface3};
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent1};
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent1};
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const FilterValue = styled(ThemedText.BodySmall)`
  color: ${({ theme }) => theme.neutral1};
  font-weight: 600;
  text-align: center;
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

// NEW: Grid view as alternative to treemap
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const GridUserCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: ${({ theme }) => theme.surface2};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.surface3};
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${({ theme }) => theme.surface3};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: inherit;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.accent1}15, 
      ${({ theme }) => theme.accent1}05
    );
    border-radius: 0 16px 0 60px;
  }
`;

const GridUserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GridUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

const GridUserStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const GridVolumeDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GridVolumeAmount = styled(ThemedText.SubHeader)`
  color: #fff;
  text-shadow: 0 0 6px ${({ theme }) => theme.accent1};
  font-size: 18px;
  font-weight: 700;
`;

const GridPerformanceChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $positive, theme }) =>
    $positive ? theme.success : theme.critical};

  &::before {
    content: "${({ $positive }) => ($positive ? "📈" : "📉")}";
    font-size: 12px;
  }
`;

const GridMiniChart = styled.div`
  height: 40px;
  margin-top: 8px;
  opacity: 0.8;
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
  
  // More conservative height calculation for better readability with fewer nodes
  const baseHeight = 500;
  const additionalHeight = Math.min(walletCount * 4, 200); // Reduced scaling
  
  const calculatedHeight = baseHeight + additionalHeight;
  
  // Clamp between min and max values
  return Math.max(500, Math.min(calculatedHeight, 800)); // Reduced max height
};

// Treemap D3 Component with improved readability
const TreemapNode = styled.div<{ 
  $x: number
  $y: number
  $width: number
  $height: number
  $rank: number
  $volume: number
  $showDetails: boolean
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
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
  box-shadow: ${({ $rank }) => {
    if ($rank === 1) return `0 0 12px #8B5CF6aa`;
    if ($rank === 2) return `0 0 10px #D1D5DBcc`;
    if ($rank === 3) return `0 0 10px #F97316cc`;
    return `inset 0 0 6px rgba(255,255,255,0.05)`;
  }};
  border-radius: 16px;
  padding: ${({ $showDetails }) => $showDetails ? '16px' : '8px'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: ${({ $showDetails }) => $showDetails ? 'space-between' : 'center'};
  align-items: ${({ $showDetails }) => $showDetails ? 'stretch' : 'center'};
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
  }
`;

const NodeHeader = styled.div<{ $compact: boolean }>`
  display: flex;
  align-items: ${({ $compact }) => $compact ? 'center' : 'flex-start'};
  justify-content: ${({ $compact }) => $compact ? 'center' : 'space-between'};
  margin-bottom: ${({ $compact }) => $compact ? '0' : '8px'};
  gap: ${({ $compact }) => $compact ? '4px' : '8px'};
`;

const WalletInfo = styled.div<{ $compact: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ $compact }) => $compact ? '4px' : '8px'};
  min-width: 0;
  flex: 1;
  flex-direction: ${({ $compact }) => $compact ? 'column' : 'row'};
`;

const WalletAvatar = styled.div<{ $rank: number; $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => Math.max(6, Math.min($size / 4, 10))}px;
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
`;

const WalletDetails = styled.div<{ $compact: boolean }>`
  min-width: 0;
  flex: 1;
  text-align: ${({ $compact }) => $compact ? 'center' : 'left'};
`;

const WalletAddressStyled = styled(ThemedText.BodySmall)<{ $fontSize: number }>`
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  font-size: ${({ $fontSize }) => $fontSize}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

const RankBadge = styled.div<{ $rank: number; $size: number }>`
  background: ${({ theme, $rank }) => {
    if ($rank === 1) return `linear-gradient(135deg, ${theme.accent1}, ${theme.accent2})`;
    if ($rank === 2) return `linear-gradient(135deg, #C0C0C0, #E8E8E8)`;
    if ($rank === 3) return `linear-gradient(135deg, #CD7F32, #FFB347)`;
    return theme.surface3;
  }};
  color: ${({ theme, $rank }) => 
    $rank <= 3 ? theme.surface1 : theme.neutral1
  };
  padding: ${({ $size }) => Math.max(2, $size / 8)}px ${({ $size }) => Math.max(4, $size / 4)}px;
  text-shadow: ${({ $rank, theme }) =>
    $rank <= 3 ? `0 0 6px ${theme.accent1}` : 'none'};
  border-radius: ${({ $size }) => Math.max(4, $size / 6)}px;
  font-size: ${({ $size }) => Math.max(8, $size / 2)}px;
  font-weight: 700;
  text-align: center;
  min-width: ${({ $size }) => $size}px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const VolumeDisplay = styled.div<{ $show: boolean }>`
  margin-top: auto;
  display: ${({ $show }) => $show ? 'block' : 'none'};
`;

const VolumeAmount = styled(ThemedText.SubHeader)<{ $fontSize: number }>`
  color: #fff;
  text-shadow: 0 0 6px ${({ theme }) => theme.accent1};
  font-size: ${({ $fontSize }) => $fontSize}px;
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

// User chart component (simplified for smaller nodes)
const UserChart = ({
  userId,
  color = "rgba(255,255,255,0.8)",
}: {
  userId: string;
  color?: string;
}) => {
  const { data: historicalData } = useUserHistoricalData(userId, 7);

  const chartData = useMemo(() => {
    const now = new Date();
    const last7Days = [];
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      date.setUTCHours(0, 0, 0, 0);
      last7Days.push(Math.floor(date.getTime() / 1000));
    }

    if (!historicalData || historicalData.length === 0) {
      return last7Days.map((timestamp, index) => ({
        index,
        value: 20 + (index * 10),
        timestamp,
        volume: 0,
      }));
    }

    const dataMap = new Map();
    historicalData.forEach((d) => {
      const dayTimestamp = d.date || 0;
      dataMap.set(dayTimestamp, parseFloat(d.dailyVolumeUSD || "0"));
    });

    let cumulativeVolume = 0;
    const last7DaysData = last7Days.map((timestamp) => {
      const dailyVolume = dataMap.get(timestamp) || 0;
      cumulativeVolume += dailyVolume;
      return {
        timestamp,
        dailyVolume,
        cumulativeVolume,
      };
    });

    const maxCumulativeVolume = Math.max(...last7DaysData.map(d => d.cumulativeVolume), 1);
    
    const points = last7DaysData.map((day, index) => {
      const normalizedY = maxCumulativeVolume > 0
        ? 20 + ((day.cumulativeVolume / maxCumulativeVolume) * 60)
        : 20 + (index * 2);
        
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

  const getHexColor = (colorString: string) => {
    if (colorString.startsWith('rgba(255,255,255')) {
      return '#ffffff';
    }
    if (colorString.startsWith('rgba(')) {
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

// Treemap component using D3 with adaptive sizing
interface TreemapComponentProps {
  users: any[];
  totalVolume: number;
  width: number;
  height: number;
  connection: Connection;
  maxUsers: number; // NEW: limit number of users shown
}

const TreemapComponent = ({
  users,
  totalVolume,
  width,
  height,
  connection,
  maxUsers,
}: TreemapComponentProps) => {
  const theme = useTheme();

  const treemapData = useMemo(() => {
    if (!users || users.length === 0) return [];

    // Limit users to maxUsers for better readability
    const limitedUsers = users.slice(0, maxUsers);

    const data = limitedUsers.map((user, index) => {
      const volume = parseFloat(user.totalVolumeUSD || "0");

      return {
        id: user.id,
        originalValue: volume,
        rank: index + 1,
        percentage:
          totalVolume > 0 ? ((volume / totalVolume) * 100).toFixed(2) : "0.00",
      };
    });

    const values = data.map((d) => d.originalValue).filter((v) => v > 0);
    if (values.length === 0) return [];

    // Improved normalization for better balance
    const normalizedData = data.map((d) => {
      let normalizedValue;

      if (d.originalValue <= 0) {
        normalizedValue = 150; // Higher base for zero volumes
      } else if (d.rank === 1) {
        // Top user gets significant but not overwhelming size
        normalizedValue = Math.log(d.originalValue + 1) * 100 + 800;
      } else if (d.rank <= 3) {
        normalizedValue = Math.log(d.originalValue + 1) * 90 + 500;
      } else if (d.rank <= 10) {
        normalizedValue = Math.log(d.originalValue + 1) * 80 + 300;
      } else {
        normalizedValue = Math.log(d.originalValue + 1) * 70 + 200;
      }

      return {
        ...d,
        value: normalizedValue,
      };
    });

    const root = d3
      .hierarchy({ children: normalizedData })
      .sum((d) => (d as any).value)
      .sort((a, b) => ((a as any).rank || 0) - ((b as any).rank || 0));

    const treemap = d3
      .treemap<any>()
      .size([width, height])
      .padding(8)
      .paddingInner(12)
      .paddingOuter(20)
      .round(true);

    treemap(root);

    return (root.leaves() as any[]).map((d: any) => {
      const nodeWidth = Math.max(d.x1 - d.x0, 140);
      const nodeHeight = Math.max(d.y1 - d.y0, 100);
      
      // Determine what to show based on size
      const showFullDetails = nodeWidth > 180 && nodeHeight > 120;
      const showMinimalDetails = nodeWidth > 120 && nodeHeight > 80;
      
      return {
        ...d.data,
        x: d.x0,
        y: d.y0,
        width: nodeWidth,
        height: nodeHeight,
        showFullDetails,
        showMinimalDetails,
      };
    });
  }, [users, totalVolume, width, height, maxUsers]);

  const formatUserAddress = (address: string, compact: boolean = false) => {
    if (!address) return "0x...";
    if (compact) {
      return `${address.slice(0, 4)}...${address.slice(-2)}`;
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) return (volume / 1000000).toFixed(2) + "M";
    if (volume >= 1000) return (volume / 1000).toFixed(2) + "K";
    return volume.toFixed(2);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {treemapData.map((node: any) => {
        const isCompact = !node.showMinimalDetails;
        const avatarSize = node.showFullDetails ? 36 : node.showMinimalDetails ? 28 : 20;
        const fontSize = node.showFullDetails ? 11 : node.showMinimalDetails ? 9 : 8;
        const volumeFontSize = node.showFullDetails ? 12 : node.showMinimalDetails ? 10 : 8;
        const rankBadgeSize = node.showFullDetails ? 24 : node.showMinimalDetails ? 20 : 16;
        
        return (
          <TreemapNode
            key={node.id}
            $x={node.x}
            $y={node.y}
            $width={node.width}
            $height={node.height}
            $rank={node.rank}
            $volume={node.originalValue}
            $showDetails={node.showMinimalDetails}
            as={Link}
            to={`/leaderboard/profile/${node.id}`}
          >
            <NodeHeader $compact={isCompact}>
              <WalletInfo $compact={isCompact}>
                <WalletAvatar $rank={node.rank} $size={avatarSize}>
                  <StatusIcon 
                    account={node.id} 
                    connection={connection} 
                    size={avatarSize} 
                    showMiniIcons={false} 
                  />
                </WalletAvatar>
                {node.showMinimalDetails && (
                  <WalletDetails $compact={isCompact}>
                    <WalletAddressStyled $fontSize={fontSize}>
                      {formatUserAddress(node.id, isCompact)}
                    </WalletAddressStyled>
                  </WalletDetails>
                )}
              </WalletInfo>
              <RankBadge $rank={node.rank} $size={rankBadgeSize}>
                #{node.rank}
              </RankBadge>
            </NodeHeader>

            <VolumeDisplay $show={node.showMinimalDetails && node.height > 80}>
              <VolumeAmount $fontSize={volumeFontSize}>
                ${formatVolume(node.originalValue)}
              </VolumeAmount>
            </VolumeDisplay>

            <MiniChart $visible={node.showFullDetails && node.width > 200 && node.height > 140}>
              <UserChart userId={node.id} color={theme.accent1} />
            </MiniChart>
          </TreemapNode>
        );
      })}
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
    if (!historicalData || historicalData.length === 0) {
      if (currentVolume && currentVolume > 0) {
        return { change24h: 0, change7d: 0 };
      }
      return { change24h: 0, change7d: 0 };
    }

    const sortedDataByDate = [...historicalData]
      .map((d) => ({
        ...d,
        dailyVolume: parseFloat(d.dailyVolumeUSD || "0"),
        timestamp: d.date || 0,
      }))
      .sort((a, b) => a.timestamp - b.timestamp);

    let cumulativeVolume = 0;
    const dataWithCumulative = sortedDataByDate.map((d) => {
      cumulativeVolume += d.dailyVolume;
      return {
        ...d,
        totalVolume: cumulativeVolume,
      };
    });

    const sortedData = dataWithCumulative.sort(
      (a, b) => b.timestamp - a.timestamp
    );

    const currentTotalVolume = currentVolume ?? sortedData[0]?.totalVolume ?? 0;

    let change24h = 0;
    let change7d = 0;

    if (sortedData.length >= 2) {
      const yesterdayTotalVolume = sortedData[1].totalVolume;

      if (yesterdayTotalVolume === 0 && currentTotalVolume > 0) {
        change24h = 100;
      } else if (yesterdayTotalVolume > 0) {
        change24h =
          ((currentTotalVolume - yesterdayTotalVolume) / yesterdayTotalVolume) *
          100;
      } else {
        change24h = 0;
      }
    } else if (sortedData.length === 1 && currentTotalVolume > 0) {
      change24h = 100;
    }

    if (sortedData.length >= 7) {
      const weekAgoTotalVolume = sortedData[6].totalVolume;

      if (weekAgoTotalVolume === 0 && currentTotalVolume > 0) {
        change7d = 100;
      } else if (weekAgoTotalVolume > 0) {
        change7d =
          ((currentTotalVolume - weekAgoTotalVolume) / weekAgoTotalVolume) *
          100;
      } else {
        change7d = 0;
      }
    } else if (sortedData.length >= 2) {
      const dailyGrowthRate = change24h / 100;

      if (dailyGrowthRate !== 0) {
        change7d = (Math.pow(1 + dailyGrowthRate, 7) - 1) * 100;
      }
    } else if (sortedData.length === 1 && currentTotalVolume > 0) {
      change7d = 100;
    }

    change24h = Math.max(-99, Math.min(change24h, 1000));
    change7d = Math.max(-99, Math.min(change7d, 2000));

    const result = {
      change24h: Math.round(change24h * 100) / 100,
      change7d: Math.round(change7d * 100) / 100,
    };

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
  const [viewMode, setViewMode] = useState<'treemap' | 'grid'>('treemap');
  const [maxUsers, setMaxUsers] = useState(20); // NEW: controllable number of users
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 800,
    height: 720,
  });

  const connection = getConnection(connector);

  const {
    users: allTimeUsers,
    loading: allTimeLoading,
    error: allTimeError,
  } = useLeaderboard(100); // Fetch more users to have flexibility

  // Get the actual number of users available
  const availableUsersCount = allTimeUsers?.length || 0;

  // Update maxUsers when available users change, but keep it within bounds
  useEffect(() => {
    if (availableUsersCount > 0) {
      // If current maxUsers exceeds available users, adjust it
      if (maxUsers > availableUsersCount) {
        setMaxUsers(Math.min(availableUsersCount, 20)); // Default to 20 or available count
      }
    }
  }, [availableUsersCount, maxUsers]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setContainerDimensions({
          width: clientWidth || 600,
          height: Math.max(clientHeight - 48, 500),
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

  // Take top users based on maxUsers setting
  const topUsers = useMemo(() => {
    if (!currentUsers || currentUsers.length === 0) return [];
    return currentUsers.slice(0, Math.min(maxUsers, currentUsers.length));
  }, [currentUsers, maxUsers]);

  const totalVolume = useMemo(() => {
    if (!topUsers || topUsers.length === 0) return 0;
    return topUsers.reduce((sum: number, user: any) => {
      const volume = parseFloat((user as any).totalVolumeUSD || "0");
      return sum + volume;
    }, 0);
  }, [topUsers]);

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
        currentVolume: volume,
      };
    });
  }, [topUsers, totalVolume]);

  const dynamicHeight = useMemo(() => {
    return calculateTreemapHeight(Math.min(maxUsers, topUsers.length));
  }, [topUsers.length, maxUsers]);

  return (
    <PageWrapper>
      <Container>
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

            <ControlsSection>
              <FilterSection>
                <FilterLabel>View Mode</FilterLabel>
                <ViewModeToggle>
                  <ViewModeButton 
                    $active={viewMode === 'treemap'} 
                    onClick={() => setViewMode('treemap')}
                  >
                    <Grid size={14} />
                    Map
                  </ViewModeButton>
                  <ViewModeButton 
                    $active={viewMode === 'grid'} 
                    onClick={() => setViewMode('grid')}
                  >
                    <List size={14} />
                    Grid
                  </ViewModeButton>
                </ViewModeToggle>
              </FilterSection>

              <FilterSection>
                <FilterLabel>Users Shown: {maxUsers} / {availableUsersCount}</FilterLabel>
                <FilterSlider
                  type="range"
                  min="10"
                  max={Math.max(10, availableUsersCount)} // Dynamic max based on available users
                  value={Math.min(maxUsers, availableUsersCount)} // Ensure value doesn't exceed available
                  onChange={(e) => setMaxUsers(parseInt(e.target.value))}
                  disabled={availableUsersCount === 0} // Disable if no users
                />
                <FilterValue>
                  {Math.min(maxUsers, availableUsersCount)} of {availableUsersCount} traders
                </FilterValue>
              </FilterSection>
            </ControlsSection>

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
                          <StatusIcon 
                            account={trader.address} 
                            connection={connection} 
                            size={40} 
                            showMiniIcons={false} 
                          />
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

        <MainContent>
          <Header>
            <HeaderLeft>
              <HeaderContent>
                <ContestTitle>
                  <TrendingUp size={24} />
                  Volume Contest
                </ContestTitle>
                <ContestDescription>
                  Compete with other traders to climb the leaderboard. Use the controls to adjust the view and number of traders shown.
                </ContestDescription>
              </HeaderContent>
            </HeaderLeft>
          </Header>

          {viewMode === 'treemap' ? (
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
                    width={containerDimensions.width - 48}
                    height={dynamicHeight - 48}
                    connection={connection}
                    maxUsers={maxUsers}
                  />
                </TreeMapWrapper>
              )}
            </TreeMapContainer>
          ) : (
            <GridContainer>
              {isLoading ? (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
                  Loading...
                </div>
              ) : error ? (
                <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", color: "#ef4444" }}>
                  Error: {error}
                </div>
              ) : (
                topUsers.map((user, index) => {
                  const volume = parseFloat(user.totalVolumeUSD || "0");
                  
                  return (
                    <UserPerformanceData
                      key={user.id}
                      userId={user.id}
                      currentVolume={volume}
                    >
                      {(performanceData) => (
                        <GridUserCard to={`/leaderboard/profile/${user.id}`}>
                          <GridUserHeader>
                            <GridUserInfo>
                              <WalletAvatar $rank={index + 1} $size={44}>
                                <StatusIcon 
                                  account={user.id} 
                                  connection={connection} 
                                  size={44} 
                                  showMiniIcons={false} 
                                />
                              </WalletAvatar>
                              <UserDetails>
                                <WalletAddress>{formatUserAddress(user.id)}</WalletAddress>
                                <VolumeText>Rank #{index + 1}</VolumeText>
                              </UserDetails>
                            </GridUserInfo>
                            <RankBadge $rank={index + 1} $size={24}>
                              #{index + 1}
                            </RankBadge>
                          </GridUserHeader>
                          
                          <GridUserStats>
                            <GridVolumeDisplay>
                              <GridVolumeAmount>
                                ${formatVolume(volume)}
                              </GridVolumeAmount>
                              <GridPerformanceChange $positive={performanceData.change24h > 0}>
                                {performanceData.change24h > 0 ? "+" : ""}
                                {performanceData.change24h.toFixed(1)}%
                              </GridPerformanceChange>
                            </GridVolumeDisplay>
                            
                            <GridMiniChart>
                              <UserChart userId={user.id} color={theme.accent1} />
                            </GridMiniChart>
                          </GridUserStats>
                        </GridUserCard>
                      )}
                    </UserPerformanceData>
                  );
                })
              )}
            </GridContainer>
          )}
        </MainContent>
      </Container>
    </PageWrapper>
  );
}