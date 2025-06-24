import React, { useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import { useUserHistoricalData } from 'hooks/useLeaderboard'
import { ThemedText } from 'theme/components'

interface UserTradingChartProps {
  userId: string
  type: 'volume' | 'score' | 'trades'
  days: number
  currentVolume?: number // Add currentVolume parameter like in UserPerformanceData
}

const ChartContainer = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 16px;
`

const LoadingContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.neutral2};
`

const ErrorContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.neutral2};
  text-align: center;
`

const EmptyContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.neutral2};
  text-align: center;
`

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.surface3};
  border-top: 2px solid ${({ theme }) => theme.accent1};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const formatValue = (value: number, type: string) => {
  if (type === 'volume') {
    // For volume type, show dollar amount
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
    return `$${value.toFixed(0)}`
  }
  
  if (type === 'score') {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`
    return value.toFixed(1)
  }
  
  return value.toString()
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  })
}

function CustomTooltip({ active, payload, label, type }: any) {
  const theme = useTheme()
  
  if (!active || !payload || !payload.length) return null

  const value = payload[0].value
  const formattedValue = formatValue(value, type)
  const date = new Date(label * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div style={{
      background: `${theme.surface1}f0`,
      border: `1px solid ${theme.surface3}`,
      borderRadius: '8px',
      padding: '12px',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
    }}>
      <div style={{
        fontSize: '12px',
        color: theme.neutral2,
        marginBottom: '4px'
      }}>
        {date}
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: '600',
        color: theme.neutral1
      }}>
        {type === 'volume' && 'Total Volume: '}
        {type === 'score' && 'Score: '}
        {type === 'trades' && 'Trades: '}
        {formattedValue}
      </div>
    </div>
  )
}

export default function UserTradingChart({ userId, type, days, currentVolume }: UserTradingChartProps) {
  const theme = useTheme()
  const { data, loading, error } = useUserHistoricalData(userId, days)

  const chartData = useMemo(() => {
    if (!data.length) return []

    const sortedData = data
      .filter(day => parseFloat(day.dailyVolumeUSD) > 0 || parseFloat(day.dailyScore) > 0 || parseInt(day.dailyTxCount) > 0)
      .sort((a, b) => a.date - b.date)

    if (type === 'volume') {
      // Show cumulative volume over time, not percentages
      console.log('UserTradingChart - Volume calculation', {
        userId,
        currentVolume,
        dataLength: sortedData.length,
        sortedData: sortedData.slice(0, 5)
      })

      const result = []
      
      // Calculate cumulative volume over time
      let cumulativeVolume = 0
      
      for (let i = 0; i < sortedData.length; i++) {
        const day = sortedData[i]
        cumulativeVolume += parseFloat(day.dailyVolumeUSD)
        
        result.push({
          date: day.date,
          value: cumulativeVolume, // Show total cumulative volume, not percentage
          formattedDate: formatDate(day.date)
        })
      }
      
      return result
    } else {
      // For score and trades, keep the original logic
      return sortedData.map(day => ({
        date: day.date,
        value: type === 'score' ? parseFloat(day.dailyScore) : parseInt(day.dailyTxCount),
        formattedDate: formatDate(day.date)
      }))
    }
  }, [data, type, userId, currentVolume])

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    )
  }

  if (error) {
    return (
      <ErrorContainer>
        <ThemedText.BodyPrimary style={{ color: 'inherit', marginBottom: '8px' }}>
          Failed to load chart data
        </ThemedText.BodyPrimary>
        <ThemedText.BodySecondary style={{ color: 'inherit' }}>
          {error}
        </ThemedText.BodySecondary>
      </ErrorContainer>
    )
  }

  if (!chartData.length) {
    return (
      <EmptyContainer>
        <ThemedText.BodyPrimary style={{ color: 'inherit', marginBottom: '8px' }}>
          No activity data
        </ThemedText.BodyPrimary>
        <ThemedText.BodySecondary style={{ color: 'inherit' }}>
          Start trading to see your performance analytics
        </ThemedText.BodySecondary>
      </EmptyContainer>
    )
  }

  const getColor = () => {
    if (type === 'volume') return theme.accent1
    if (type === 'score') return theme.success
    return theme.accent2
  }

  const gradientId = `gradient-${type}`

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
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
            tickFormatter={formatDate}
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: theme.neutral2, 
              fontSize: 11 
            }}
            interval="preserveStartEnd"
          />
          <YAxis 
            tickFormatter={(value) => formatValue(value, type)}
            axisLine={false}
            tickLine={false}
            tick={{ 
              fill: theme.neutral2, 
              fontSize: 11 
            }}
            width={60}
          />
          <Tooltip 
            content={<CustomTooltip type={type} />}
            cursor={{ 
              stroke: getColor(), 
              strokeWidth: 1,
              strokeDasharray: '3 3'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={getColor()}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            dot={false}
            activeDot={{ 
              r: 4, 
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
