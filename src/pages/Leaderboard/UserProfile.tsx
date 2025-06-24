import { Trans } from '@lingui/macro'
import { useWeb3React } from '@web3-react/core'
import { ButtonPrimary } from 'components/Button'
import { useUserProfile, useUserHistoricalData } from 'hooks/useLeaderboard'
import UserTradingChart from 'components/UserTradingChart'
import { useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled, { useTheme, keyframes } from 'styled-components'
import { ThemedText } from 'theme/components'
import { PageWrapper as SwapPageWrapper } from 'components/swap/styled'
import StatusIcon from "components/Identicon/StatusIcon"
import { getConnection } from "connection"
import { 
  ArrowLeft, 
  ExternalLink,
  Copy,
  Check,
  BarChart,
  Zap,
  TrendingUp,
  Activity,
  Users,
  Calendar,
  Award
} from 'react-feather'

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
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
`

// Main Layout con tema app moderno e coerente con index.tsx
const PageWrapper = styled(SwapPageWrapper)`
  max-width: 1400px;
  min-height: 100vh;
  padding: 68px 24px 24px;
  background: ${({ theme }) => theme.background};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, ${({ theme }) => theme.accent1}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${({ theme }) => theme.accent2}15 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 68px 16px 16px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.neutral2};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 0;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  animation: ${slideIn} 0.4s ease-out;

  &:hover {
    color: ${({ theme }) => theme.neutral1};
    transform: translateX(-4px);
  }
`

// Profile Header con tema moderno e glassmorphism
const ProfileHeader = styled.div`
  background: ${({ theme }) => `${theme.surface1}80`};
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 40px;
  border: 1px solid ${({ theme }) => `${theme.surface3}40`};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent1}08, ${({ theme }) => theme.accent2}08);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
    border-radius: 32px 32px 0 0;
  }
`

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 32px;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
`
// Add new styled components for better wallet UI
const StatusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: ${({ theme }) => `${theme.surface3}60`};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.accent1}30`};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => `${theme.surface3}80`};
    border-color: ${({ theme }) => `${theme.accent1}50`};
    transform: scale(1.05);
  }
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => `${theme.surface3}40`};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.surface3}50`};
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => `${theme.surface3}60`};
    border-color: ${({ theme }) => `${theme.accent1}40`};
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

// User Type Tag - classificazione whale/shark/fish/shrimp
const UserTypeTag = styled.div<{ $userType: 'whale' | 'shark' | 'fish' | 'shrimp' }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${float} 3s ease-in-out infinite;
  
  ${({ $userType, theme }) => {
    switch ($userType) {
      case 'whale':
        return `
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: white;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        `
      case 'shark':
        return `
          background: linear-gradient(135deg, #7c2d12, #ea580c);
          color: white;
          box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
        `
      case 'fish':
        return `
          background: linear-gradient(135deg, #065f46, #10b981);
          color: white;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        `
      case 'shrimp':
        return `
          background: linear-gradient(135deg, #7c2d12, #f59e0b);
          color: white;
          box-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
        `
      default:
        return `
          background: ${theme.surface2};
          color: ${theme.neutral1};
        `
    }
  }}
  
  &::before {
    content: '${({ $userType }) => {
      switch ($userType) {
        case 'whale': return '🐋'
        case 'shark': return '🦈'
        case 'fish': return '🐟'
        case 'shrimp': return '🦐'
        default: return '🐠'
      }
    }}';
    font-size: 16px;
  }
`

const RankBadge = styled.div<{ $rank: number }>`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 28px;
  position: relative;
  backdrop-filter: blur(10px);
  animation: ${float} 4s ease-in-out infinite;
  
  ${({ $rank, theme }) => {
    if ($rank === 1) return `
      background: linear-gradient(135deg, #FFD700, #FFA500); 
      color: #000;
      box-shadow: 
        0 12px 40px rgba(255, 215, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    `
    if ($rank === 2) return `
      background: linear-gradient(135deg, #C0C0C0, #E5E5E5); 
      color: #000;
      box-shadow: 
        0 12px 40px rgba(192, 192, 192, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    `
    if ($rank === 3) return `
      background: linear-gradient(135deg, #CD7F32, #D2691E); 
      color: #fff;
      box-shadow: 
        0 12px 40px rgba(205, 127, 50, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    `
    return `
      background: linear-gradient(135deg, ${theme.accent1}, ${theme.accent2}); 
      color: ${theme.surface1};
      box-shadow: 
        0 12px 40px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    `
  }}
  
  &::before {
    content: '${({ $rank }) => {
      if ($rank === 1) return '👑'
      if ($rank === 2) return '🥈'
      if ($rank === 3) return '🥉'
      return '#'
    }}';
    ${({ $rank }) => $rank > 3 ? 'margin-right: 4px;' : ''}
  }
  
  &::after {
    content: '${({ $rank }) => $rank > 3 ? $rank.toString() : ''}';
  }
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`

const UserMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`

const AddressDisplay = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  padding: 12px 16px;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 22px;
    text-align: center;
    padding: 10px 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
    padding: 8px 12px;
  }
`

const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.neutral1};
  font-size: 16px;
  font-weight: 500;
  flex-wrap: wrap;
  background: ${({ theme }) => `${theme.surface2}40`};
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}50, ${({ theme }) => theme.accent2}50);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 8px;
  }
`

const AddressActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-top: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`

const IconButton = styled.button`
  background: ${({ theme }) => `${theme.surface2}80`};
  backdrop-filter: blur(15px);
  border: 1px solid ${({ theme }) => `${theme.surface3}50`};
  border-radius: 16px;
  padding: 16px;
  color: ${({ theme }) => theme.neutral1};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: ${({ theme }) => `${theme.surface3}90`};
    color: ${({ theme }) => theme.neutral1};
    transform: translateY(-4px) scale(1.05);
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => `${theme.accent1}50`};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
  
  /* Success state for copy button */
  &.success {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2));
    border-color: rgba(34, 197, 94, 0.5);
    color: #22c55e;
    
    &:hover {
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(22, 163, 74, 0.3));
    }
  }
`

// Stats Grid moderno e glassmorphism
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`

const StatCard = styled.div`
  background: ${({ theme }) => `${theme.surface2}40`};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 28px;
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent1}05, ${({ theme }) => theme.accent2}05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: ${({ theme }) => `${theme.surface3}50`};
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.05);
    border-color: ${({ theme }) => `${theme.accent1}30`};
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
`

const StatIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent1}20, ${({ theme }) => theme.accent2}20);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.white};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.accent1}20`};

`

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.neutral1};
  margin-bottom: 8px;
  letter-spacing: -0.5px;
`

const StatLabel = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.neutral2};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

// Content Layout moderno
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: ${({ theme }) => `${theme.surface1}70`};
  backdrop-filter: blur(25px);
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent1}03, ${({ theme }) => theme.accent2}03);
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => `${theme.accent1}20`};
  }
`

const CardHeader = styled.div`
  padding: 32px 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => `${theme.surface2}20`};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => `${theme.surface3}20`};
`

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral1};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.3px;
`

const CardContent = styled.div`
  padding: 32px;
`

// Chart Controls moderni con glassmorphism
const ChartContainer = styled.div`
  height: 420px;
  position: relative;
  margin-top: 24px;
  background: ${({ theme }) => `${theme.surface2}30`};
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    height: 320px;
  }
`

const ChartControls = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`

const ControlGroup = styled.div`
  display: flex;
  gap: 8px;
  padding: 6px;
  background: ${({ theme }) => `${theme.surface2}20`};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
`

const ChartButton = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) => $active ? 
    `linear-gradient(135deg, ${theme.accent1}, ${theme.accent2})` : 
    'transparent'
  };
  color: ${({ $active, theme }) => $active ? theme.surface1 : theme.neutral2};
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: ${({ $active, theme }) => $active ? theme.surface1 : theme.neutral1};
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(0.98);
  }
`

// Recent Activity - UI completamente rinnovata e corretta
const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 500px;
  overflow-y: auto;
  padding: 4px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => `${theme.surface2}30`};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `${theme.surface3}60`};
    border-radius: 4px;
    
    &:hover {
      background: ${({ theme }) => `${theme.surface3}80`};
    }
  }
`

const ActivityItem = styled.div`
  background: ${({ theme }) => `${theme.surface2}25`};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => `${theme.surface3}30`};
  border-radius: 20px;
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: visible;
  min-height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent1}05, ${({ theme }) => theme.accent2}05);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 20px 20px 0 0;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => `${theme.surface2}40`};
    border-color: ${({ theme }) => `${theme.accent1}50`};
    box-shadow: 
      0 12px 30px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.08);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      opacity: 1;
    }
  }
`

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`

const ActivityMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
`

const TradePair = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral1};
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.2px;
  line-height: 1.2;
  
  &::before {
    content: '🔄';
    font-size: 16px;
    opacity: 0.8;
    flex-shrink: 0;
  }
`

const TradeType = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent1};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  background: ${({ theme }) => `${theme.accent1}20`};
  padding: 6px 12px;
  border-radius: 12px;
  display: inline-block;
  border: 1px solid ${({ theme }) => `${theme.accent1}30`};
  width: fit-content;
`

const TradeValue = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  flex-shrink: 0;
`

const TradeAmount = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.success};
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.1;
  
  &::before {
    content: '💰';
    font-size: 16px;
    flex-shrink: 0;
  }
`

const TradeFee = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.neutral3};
  font-weight: 500;
  line-height: 1;
`

const ActivityFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => `${theme.surface3}25`};
  width: 100%;
  gap: 12px;
`

const TradeTime = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.neutral2};
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  line-height: 1;
  flex: 1;
`

const TradeHash = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.neutral3};
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: ${({ theme }) => `${theme.surface3}25`};
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => `${theme.surface3}20`};
  line-height: 1;
  flex-shrink: 0;
  
  &:hover {
    background: ${({ theme }) => `${theme.surface3}50`};
    color: ${({ theme }) => theme.neutral2};
    border-color: ${({ theme }) => `${theme.surface3}40`};
    transform: scale(1.02);
  }
  
  &::after {
    content: '📋';
    font-size: 10px;
    opacity: 0.7;
    flex-shrink: 0;
  }
`

const EmptyActivityState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  text-align: center;
  color: ${({ theme }) => theme.neutral2};
  gap: 20px;
  min-height: 200px;
  
  .icon {
    font-size: 64px;
    opacity: 0.7;
    margin-bottom: 12px;
    animation: ${pulse} 2s ease-in-out infinite;
    line-height: 1;
  }
  
  .title {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral1};
    margin-bottom: 8px;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 15px;
    font-weight: 500;
    opacity: 0.8;
    max-width: 300px;
    line-height: 1.4;
  }
`

// States moderni
const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  color: ${({ theme }) => theme.neutral2};
  gap: 16px;
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 40px;
  color: ${({ theme }) => theme.neutral2};
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`

const ErrorState = styled.div`
  text-align: center;
  padding: 80px 40px;
  color: ${({ theme }) => theme.critical};
  
  div {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`

// Performance indicators con glassmorphism
const PerformanceCard = styled.div`
  background: ${({ theme }) => `${theme.surface2}30`};
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 24px;
  border: 1px solid ${({ theme }) => `${theme.surface3}40`};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accent1}05, ${({ theme }) => theme.accent2}05);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => `${theme.accent1}30`};
    
    &::before {
      opacity: 1;
    }
  }
`

const PerformanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const PerformanceTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.neutral2};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const PerformanceValue = styled.div<{ $positive?: boolean; $neutral?: boolean }>`
  font-size: 28px;
  font-weight: 800;
  color: ${({ $positive, $neutral, theme }) => {
    if ($neutral) return theme.neutral1
    return $positive ? theme.success : theme.critical
  }};
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.5px;
  
  &::before {
    content: '${({ $positive, $neutral }) => {
      if ($neutral) return ''
      return $positive ? '📈' : '📉'
    }}';
    font-size: 20px;
    animation: ${$positive => $positive ? pulse : 'none'} 1.5s ease-in-out infinite;
  }
`

// Component per calcolare performance reali di un utente usando la stessa logica di index.tsx
const UserPerformanceData = ({
  userId,
  currentVolume,
  children,
}: {
  userId: string;
  currentVolume?: number;
  children: (data: { change24h: number; change7d: number; loading: boolean }) => React.ReactNode;
}) => {
  const { data: historicalData, loading } = useUserHistoricalData(userId, 7);

  const performanceData = useMemo(() => {
    console.log(
      "UserPerformanceData - userId:",
      userId,
      "historicalData:",
      historicalData,
      "currentVolume:",
      currentVolume
    );

    if (loading) {
      return { change24h: 0, change7d: 0, loading: true };
    }

    // Se non abbiamo dati storici sufficienti
    if (!historicalData || historicalData.length === 0) {
      console.log("No historical data available");
      if (currentVolume && currentVolume > 0) {
        // Se c'è volume attuale ma nessun dato storico, significa che è il primo giorno
        // Non possiamo calcolare una crescita percentuale senza punto di confronto
        // Ma se è il primo giorno di attività, potremmo considerarlo come 100% o N/A
        return { change24h: 0, change7d: 0, loading: false }; // o return { change24h: null, change7d: null }
      }
      return { change24h: 0, change7d: 0, loading: false };
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
      loading: false,
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
  }, [historicalData, userId, currentVolume, loading]);

  return children(performanceData);
};

// Helper functions aggiornate
const formatAddress = (address: string) => {
  if (!address) return '0x...'
  
  // For mobile, show fewer characters
  if (typeof window !== 'undefined' && window.innerWidth < 480) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }
  
  // For tablet, show more characters
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return `${address.slice(0, 6)}...${address.slice(-6)}`
  }
  
  // For desktop, show full formatting
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

const formatVolume = (volume: string | number) => {
  const num = typeof volume === 'string' ? parseFloat(volume) : volume
  if (isNaN(num)) return '$0'
  if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`
  return `$${num.toFixed(0)}`
}

const formatScore = (score: string | number) => {
  const num = typeof score === 'string' ? parseFloat(score) : score
  if (isNaN(num)) return '0'
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toFixed(0)
}

const formatTimeAgo = (timestamp: string | number) => {
  const now = Date.now()
  const time = typeof timestamp === 'string' ? parseInt(timestamp) * 1000 : timestamp * 1000
  const diff = now - time
  
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  
  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'Just now'
}

const getDaysActive = (firstTimestamp: string | number) => {
  const now = Date.now()
  const first = typeof firstTimestamp === 'string' ? parseInt(firstTimestamp) * 1000 : firstTimestamp * 1000
  return Math.floor((now - first) / (1000 * 60 * 60 * 24))
}

// Function to determine user type based on volume
const getUserType = (volume: string | number): 'whale' | 'shark' | 'fish' | 'shrimp' => {
  const volumeNum = typeof volume === 'string' ? parseFloat(volume) : volume
  
  if (volumeNum >= 1000000) return 'whale'      // $1M+
  if (volumeNum >= 100000) return 'shark'       // $100K+
  if (volumeNum >= 5000) return 'fish'         // $10K+
  return 'shrimp'                               // < $10K
}

const getUserTypeLabel = (userType: 'whale' | 'shark' | 'fish' | 'shrimp'): string => {
  switch (userType) {
    case 'whale': return 'Whale Trader'
    case 'shark': return 'Shark Trader'
    case 'fish': return 'Fish Trader'
    case 'shrimp': return 'Shrimp Trader'
    default: return 'Trader'
  }
}

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()
  const { account, connector } = useWeb3React()
  const theme = useTheme()
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [chartType, setChartType] = useState<'volume' | 'score' | 'trades'>('volume')
  const [chartDays, setChartDays] = useState(30)
  
  const { user, loading, error, isOwnProfile } = useUserProfile(userId)

  // Get connection for StatusIcon (same logic as index.tsx)
  const connection = getConnection(connector)

  // Determine user type based on volume
  const userType = user ? getUserType(user.totalVolumeUSD) : 'shrimp'

  const copyAddress = async () => {
    if (!user) return
    
    try {
      await navigator.clipboard.writeText(user.id)
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  const openInExplorer = () => {
    if (!user) return
    window.open(`https://explorer.uomi.ai/address/${user.id}`, '_blank')
  }

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <BackButton onClick={() => navigate('/leaderboard')}>
            <ArrowLeft size={16} />
            Back to Leaderboard
          </BackButton>
          
          <LoadingState>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              borderTop: '3px solid currentColor',
              borderRadius: '50%',
              animation: `spin 1s linear infinite`
            }} />
            <div>Loading profile...</div>
          </LoadingState>
        </Container>
      </PageWrapper>
    )
  }

  if (error || !user) {
    return (
      <PageWrapper>
        <Container>
          <BackButton onClick={() => navigate('/leaderboard')}>
            <ArrowLeft size={16} />
            Back to Leaderboard
          </BackButton>
          
          <ErrorState>
            <Zap size={48} />
            <div>
              {error ? 'Failed to load profile' : 'User not found'}
            </div>
          </ErrorState>
        </Container>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Container>
        <BackButton onClick={() => navigate('/leaderboard')}>
          <ArrowLeft size={16} />
          Back to Leaderboard
        </BackButton>

        <ProfileHeader>
          <ProfileInfo>
            <RankBadge $rank={user.rank} />
            <UserMainInfo>
              <AddressDisplay>{formatAddress(user.id)}</AddressDisplay>
              <UserStatus>
                <ProfileSection>
                  <StatusIconWrapper>
                    <StatusIcon 
                      account={user.id} 
                      connection={connection} 
                      size={24} 
                      showMiniIcons={false} 
                    />
                  </StatusIconWrapper>
                  
                  <StatusBadge>
                    <Users size={16} />
                    Rank #{user.rank}
                  </StatusBadge>
                  
                  <UserTypeTag $userType={userType}>
                    {getUserTypeLabel(userType)}
                  </UserTypeTag>
                  
                  <StatusBadge>
                    <Calendar size={16} />
                    {getDaysActive(user.firstTransactionTimestamp)} days active
                  </StatusBadge>
                  
                  {isOwnProfile && (
                    <StatusBadge style={{ 
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))',
                      borderColor: 'rgba(255, 215, 0, 0.3)',
                      color: '#FFD700'
                    }}>
                      <Award size={16} />
                      Your Profile
                    </StatusBadge>
                  )}
                </ProfileSection>
              </UserStatus>
            </UserMainInfo>
            <AddressActions>
              <IconButton 
                className={copiedAddress ? 'success' : ''}
                onClick={copyAddress} 
                title={copiedAddress ? 'Address copied!' : 'Copy address'}
              >
                {copiedAddress ? <Check size={16} /> : <Copy size={16} />}
              </IconButton>
              <IconButton onClick={openInExplorer} title="View on explorer">
                <ExternalLink size={16} />
              </IconButton>
            </AddressActions>
          </ProfileInfo>

          <StatsGrid>
            <StatCard>
              <StatIcon>
                <BarChart size={20} />
              </StatIcon>
              <StatValue>{formatVolume(user.totalVolumeUSD)}</StatValue>
              <StatLabel>
                <TrendingUp size={12} />
                Total Volume
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <Activity size={20} />
              </StatIcon>
              <StatValue>{user.txCount}</StatValue>
              <StatLabel>
                <Zap size={12} />
                Total Trades
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <Award size={20} />
              </StatIcon>
              <StatValue>{formatScore(user.score)}</StatValue>
              <StatLabel>
                <Users size={12} />
                Trading Score
              </StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>
                <Calendar size={20} />
              </StatIcon>
              <StatValue>{getDaysActive(user.firstTransactionTimestamp)}</StatValue>
              <StatLabel>
                <Activity size={12} />
                Days Active
              </StatLabel>
            </StatCard>
          </StatsGrid>
        </ProfileHeader>

        <ContentGrid>
          <Card>
            <CardHeader>
              <CardTitle>
                <BarChart size={18} />
                Performance Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <UserPerformanceData userId={user.id} currentVolume={parseFloat(user.totalVolumeUSD || '0')}>
                {(performanceData) => (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                      <PerformanceCard>
                        <PerformanceHeader>
                          <PerformanceTitle>Total Volume Change (24h)</PerformanceTitle>
                        </PerformanceHeader>
                        <PerformanceValue 
                          $positive={performanceData.change24h > 0}
                          $neutral={performanceData.change24h === 0}
                        >
                          {performanceData.loading ? 'Loading...' : (
                            `${performanceData.change24h > 0 ? '+' : ''}${performanceData.change24h.toFixed(1)}%`
                          )}
                        </PerformanceValue>
                      </PerformanceCard>
                      
                      <PerformanceCard>
                        <PerformanceHeader>
                          <PerformanceTitle>Total Volume Change (7d)</PerformanceTitle>
                        </PerformanceHeader>
                        <PerformanceValue 
                          $positive={performanceData.change7d > 0}
                          $neutral={performanceData.change7d === 0}
                        >
                          {performanceData.loading ? 'Loading...' : (
                            `${performanceData.change7d > 0 ? '+' : ''}${performanceData.change7d.toFixed(1)}%`
                          )}
                        </PerformanceValue>
                      </PerformanceCard>
                    </div>
                  </>
                )}
              </UserPerformanceData>
              
              <ChartControls>
                <ControlGroup>
                  <ChartButton 
                    $active={chartType === 'volume'} 
                    onClick={() => setChartType('volume')}
                  >
                    Volume
                  </ChartButton>
                  <ChartButton 
                    $active={chartType === 'score'} 
                    onClick={() => setChartType('score')}
                  >
                    Score
                  </ChartButton>
                  <ChartButton 
                    $active={chartType === 'trades'} 
                    onClick={() => setChartType('trades')}
                  >
                    Trades
                  </ChartButton>
                </ControlGroup>
                <ControlGroup>
                  <ChartButton 
                    $active={chartDays === 7} 
                    onClick={() => setChartDays(7)}
                  >
                    7D
                  </ChartButton>
                  <ChartButton 
                    $active={chartDays === 30} 
                    onClick={() => setChartDays(30)}
                  >
                    30D
                  </ChartButton>
                </ControlGroup>
              </ChartControls>
              <ChartContainer>
                <UserTradingChart 
                  userId={user.id} 
                  type={chartType} 
                  days={chartDays}
                  currentVolume={parseFloat(user.totalVolumeUSD || '0')}
                />
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Activity size={18} />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!user.swaps || user.swaps.length === 0 ? (
                <EmptyActivityState>
                  <div className="icon">📈</div>
                  <div className="title">No Recent Activity</div>
                  <div className="subtitle">
                    Start trading to see your transaction history here
                  </div>
                </EmptyActivityState>
              ) : (
                <ActivityContainer>
                  {user.swaps.slice(0, 10).map((swap, index) => (
                    <ActivityItem key={swap.id}>
                      <ActivityHeader>
                        <ActivityMainInfo>
                          <TradePair>
                            {swap.pool.token0.symbol}/{swap.pool.token1.symbol}
                          </TradePair>
                          <TradeType>Swap</TradeType>
                        </ActivityMainInfo>
                        <TradeValue>
                          <TradeAmount>
                            {formatVolume(swap.amountUSD)}
                          </TradeAmount>
                       
                        </TradeValue>
                      </ActivityHeader>
                      
                      <ActivityFooter>
                        <TradeTime>
                          <Calendar size={12} />
                          {formatTimeAgo(swap.timestamp)}
                        </TradeTime>
                        <TradeHash 
                          onClick={() => navigator.clipboard.writeText(swap.id)}
                          title="Click to copy transaction hash"
                        >
                          {swap.id.slice(0, 8)}...{swap.id.slice(-4)}
                        </TradeHash>
                      </ActivityFooter>
                    </ActivityItem>
                  ))}
                </ActivityContainer>
              )}
            </CardContent>
          </Card>
        </ContentGrid>
      </Container>
    </PageWrapper>
  )
}