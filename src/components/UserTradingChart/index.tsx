import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import styled, { useTheme } from 'styled-components'
import { useUserHistoricalData, UserDayData } from 'hooks/useLeaderboard'
import { ThemedText } from 'theme/components'

const ChartContainer = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  color: ${({ theme }) => theme.neutral2};
`

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
  color: ${({ theme }) => theme.neutral2};
  text-align: center;
`

const CustomTooltip = styled.div`
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(20px);
`

const TooltipLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.neutral2};
  margin-bottom: 4px;
  font-weight: 500;
`

const TooltipValue = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.neutral1};
  font-weight: 600;
`

interface ChartTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label }) => {
  const theme = useTheme()
  
  if (active && payload && payload.length) {
    const data = payload[0].payload
    const date = new Date(data.date * 1000)
    
    return (
      <CustomTooltip>
        <TooltipLabel>{date.toLocaleDateString()}</TooltipLabel>
        <TooltipValue>
          Volume Change: {data.dailyVolumeUSD > 0 ? '+' : ''}{data.dailyVolumeUSD.toFixed(1)}%
        </TooltipValue>
        <TooltipValue style={{ marginTop: '4px' }}>
          Score: {parseFloat(data.dailyScore).toFixed(1)}
        </TooltipValue>
        <TooltipValue style={{ marginTop: '4px' }}>
          Trades: {data.dailyTxCount}
        </TooltipValue>
      </CustomTooltip>
    )
  }

  return null
}

interface UserTradingChartProps {
  userId?: string
  days?: number
  type?: 'volume' | 'score' | 'trades'
  currentVolume?: number // Add currentVolume parameter
}

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.surface3};
  border-top: 3px solid ${({ theme }) => theme.accent1};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default function UserTradingChart({ userId, days = 30, type = 'volume', currentVolume }: UserTradingChartProps) {
  const theme = useTheme()
  const { data, loading, error } = useUserHistoricalData(userId, days)

  if (loading) {
    return (
      <ChartContainer>
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      </ChartContainer>
    )
  }

  if (error || !data.length) {
    return (
      <ChartContainer>
        <EmptyContainer>
          <div style={{ fontSize: '32px', marginBottom: '12px', opacity: 0.5 }}>📊</div>
          <ThemedText.BodyPrimary style={{ color: 'inherit', marginBottom: '4px' }}>
            {error ? 'Failed to load chart data' : 'No trading data available'}
          </ThemedText.BodyPrimary>
          <ThemedText.BodySecondary style={{ color: 'inherit' }}>
            {error || 'Start trading to see your performance over time'}
          </ThemedText.BodySecondary>
        </EmptyContainer>
      </ChartContainer>
    )
  }

  // Process data for chart
  const chartData = (() => {
    if (!data.length) return []

    const sortedData = data
      .filter(item => parseFloat(item.dailyVolumeUSD) > 0 || parseFloat(item.dailyScore) > 0 || parseInt(item.dailyTxCount) > 0)
      .sort((a, b) => a.date - b.date)

    if (type === 'volume') {
      // Implement the same logic as UserPerformanceData for volume percentage calculation
      console.log('UserTradingChart/index - Volume calculation', {
        userId,
        currentVolume,
        dataLength: sortedData.length
      })

      const result = []
      let cumulativeVolume = 0
      
      for (let i = 0; i < sortedData.length; i++) {
        const item = sortedData[i]
        cumulativeVolume += parseFloat(item.dailyVolumeUSD)
        
        let percentageChange = 0
        
        if (i > 0) {
          // Compare with previous day's cumulative volume
          const previousCumulativeVolume = result[i - 1].cumulativeVolume
          if (previousCumulativeVolume > 0) {
            percentageChange = ((cumulativeVolume - previousCumulativeVolume) / previousCumulativeVolume) * 100
            // Apply same range limits as UserPerformanceData
            percentageChange = Math.max(-99, Math.min(1000, percentageChange))
          }
        }
        
        result.push({
          date: item.date,
          dailyVolumeUSD: percentageChange, // Use percentage for volume
          dailyScore: parseFloat(item.dailyScore),
          dailyTxCount: parseInt(item.dailyTxCount),
          cumulativeVolume: cumulativeVolume,
          formattedDate: new Date(item.date * 1000).toLocaleDateString()
        })
      }
      
      return result
    } else {
      // For score and trades, keep the original logic
      return sortedData.map((item) => ({
        date: item.date,
        dailyVolumeUSD: parseFloat(item.dailyVolumeUSD),
        dailyScore: parseFloat(item.dailyScore),
        dailyTxCount: parseInt(item.dailyTxCount),
        formattedDate: new Date(item.date * 1000).toLocaleDateString()
      }))
    }
  })()

  const getDataKey = () => {
    switch (type) {
      case 'volume': return 'dailyVolumeUSD'
      case 'score': return 'dailyScore'
      case 'trades': return 'dailyTxCount'
      default: return 'dailyVolumeUSD'
    }
  }

  const getColor = () => {
    switch (type) {
      case 'volume': return theme.accent1
      case 'score': return theme.success
      case 'trades': return theme.accent2
      default: return theme.accent1
    }
  }

  const formatXAxisLabel = (tickItem: number) => {
    const date = new Date(tickItem * 1000)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const formatYAxisLabel = (value: number) => {
    if (type === 'volume') {
      // For volume type, show percentage change
      if (value > 0) return `+${value.toFixed(0)}%`
      if (value < 0) return `${value.toFixed(0)}%`
      return '0%'
    }
    if (type === 'score') {
      if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
      return value.toFixed(0)
    }
    return value.toString()
  }

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id={`gradient-${type}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={getColor()} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={getColor()} stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme.surface3} 
            opacity={0.3}
          />
          <XAxis 
            dataKey="date"
            tickFormatter={formatXAxisLabel}
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: theme.neutral2, 
              fontSize: 11,
              fontWeight: 500
            }}
            dy={10}
          />
          <YAxis 
            tickFormatter={formatYAxisLabel}
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: theme.neutral2, 
              fontSize: 11,
              fontWeight: 500
            }}
            dx={-10}
          />
          <Tooltip 
            content={<ChartTooltip />}
            cursor={{ 
              stroke: getColor(), 
              strokeWidth: 1, 
              strokeDasharray: '3 3',
              opacity: 0.5
            }}
          />
          <Area
            type="monotone"
            dataKey={getDataKey()}
            stroke={getColor()}
            strokeWidth={2}
            fill={`url(#gradient-${type})`}
            dot={{ 
              fill: getColor(), 
              strokeWidth: 2, 
              stroke: theme.surface1,
              r: 3
            }}
            activeDot={{ 
              r: 5, 
              fill: getColor(),
              stroke: theme.surface1,
              strokeWidth: 2
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
