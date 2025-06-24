import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'

const SUBGRAPH_URL = 'https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub'

export interface LeaderboardUser {
  id: string
  totalVolumeUSD: string
  totalVolumeETH: string
  score: string
  txCount: string
  firstTransactionTimestamp: string
  lastTransactionTimestamp: string
  rank: number
}

export interface UserDayData {
  id: string
  date: number
  user: {
    id: string
  }
  dailyVolumeUSD: string
  dailyVolumeETH: string
  dailyScore: string
  dailyTxCount: string
}

export interface UserSwap {
  id: string
  amountUSD: string
  timestamp: string
  pool: {
    id: string
    token0: {
      symbol: string
    }
    token1: {
      symbol: string
    }
  }
}

interface UserDetails extends LeaderboardUser {
  swaps: UserSwap[]
  userDayData: UserDayData[]
}

// Top users query for leaderboard
const TOP_USERS_QUERY = `
  query GetTopUsers($first: Int!, $skip: Int!) {
    users(
      first: $first
      skip: $skip
      orderBy: score
      orderDirection: desc
      where: { score_gt: "0" }
    ) {
      id
      totalVolumeUSD
      totalVolumeETH
      score
      txCount
      firstTransactionTimestamp
      lastTransactionTimestamp
    }
  }
`

// User details query for profile
const USER_DETAILS_QUERY = `
  query GetUserDetails($userId: String!) {
    user(id: $userId) {
      id
      totalVolumeUSD
      totalVolumeETH
      score
      txCount
      firstTransactionTimestamp
      lastTransactionTimestamp
      swaps(first: 10, orderBy: timestamp, orderDirection: desc) {
        id
        amountUSD
        timestamp
        pool {
          id
          token0 {
            symbol
          }
          token1 {
            symbol
          }
        }
      }
      userDayData(first: 30, orderBy: date, orderDirection: desc) {
        id
        date
        dailyVolumeUSD
        dailyVolumeETH
        dailyScore
        dailyTxCount
        user {
          id
        }
      }
    }
  }
`

// Daily leaderboard query
const DAILY_LEADERS_QUERY = `
  query GetDailyLeaders($date: Int!) {
    userDayDatas(
      first: 10
      orderBy: dailyVolumeUSD
      orderDirection: desc
      where: { 
        date: $date
        dailyVolumeUSD_gt: "0"
      }
    ) {
      id
      user {
        id
      }
      dailyVolumeUSD
      dailyScore
      dailyTxCount
    }
  }
`

// User historical data query for charts
const USER_HISTORICAL_DATA_QUERY = `
  query GetUserHistoricalData($userId: String!, $first: Int!, $orderDirection: String!) {
    userDayDatas(
      first: $first
      orderBy: date
      orderDirection: $orderDirection
      where: { 
        user: $userId
        dailyVolumeUSD_gt: "0"
      }
    ) {
      id
      date
      dailyVolumeUSD
      dailyScore
      dailyTxCount
      user {
        id
      }
    }
  }
`

async function fetchLeaderboard(first: number = 100, skip: number = 0): Promise<LeaderboardUser[]> {
  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: TOP_USERS_QUERY,
        variables: { first, skip },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    const users = data.data?.users || []
    
    // Add rank based on order
    return users.map((user: any, index: number) => ({
      ...user,
      rank: skip + index + 1,
    }))
  } catch (error) {
    console.error('Error fetching leaderboard data:', error)
    throw error
  }
}

async function fetchUserDetails(userId: string): Promise<UserDetails | null> {
  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: USER_DETAILS_QUERY,
        variables: { userId: userId.toLowerCase() },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    const user = data.data?.user
    if (!user) return null

    // Calculate rank by counting users with higher score
    const rankResponse = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetUserRank($score: String!) {
            users(where: { score_gt: $score }) {
              id
            }
          }
        `,
        variables: { score: user.score },
      }),
    })

    const rankData = await rankResponse.json()
    const rank = (rankData.data?.users?.length || 0) + 1

    return {
      ...user,
      rank,
    }
  } catch (error) {
    console.error('Error fetching user details:', error)
    throw error
  }
}

async function fetchDailyLeaders(date?: Date): Promise<UserDayData[]> {
  const targetDate = date || new Date()
  const dayTimestamp = Math.floor(targetDate.setUTCHours(0, 0, 0, 0) / 1000)

  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: DAILY_LEADERS_QUERY,
        variables: { date: dayTimestamp },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    return data.data?.userDayDatas || []
  } catch (error) {
    console.error('Error fetching daily leaders:', error)
    throw error
  }
}

async function fetchUserHistoricalData(userId: string, first: number = 100, orderDirection: 'asc' | 'desc' = 'desc'): Promise<UserDayData[]> {
  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: USER_HISTORICAL_DATA_QUERY,
        variables: { userId: userId.toLowerCase(), first, orderDirection },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    return data.data?.userDayDatas || []
  } catch (error) {
    console.error('Error fetching user historical data:', error)
    throw error
  }
}

// Hook for user historical data
export function useUserHistoricalData(userId?: string, days: number = 30) {
  const [data, setData] = useState<UserDayData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) return

    const loadData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const historicalData = await fetchUserHistoricalData(userId, days, 'asc')
        setData(historicalData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load historical data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [userId, days])

  return { data, loading, error }
}

export function useLeaderboard(pageSize: number = 50) {
  const [users, setUsers] = useState<LeaderboardUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)

  const loadMore = async () => {
    try {
      setLoading(true)
      const skip = page * pageSize
      const newUsers = await fetchLeaderboard(pageSize, skip)
      
      if (page === 0) {
        setUsers(newUsers)
      } else {
        setUsers(prev => [...prev, ...newUsers])
      }
      
      setHasMore(newUsers.length === pageSize)
      setPage(prev => prev + 1)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const refresh = () => {
    setPage(0)
    setUsers([])
    setHasMore(true)
    setError(null)
    loadMore()
  }

  useEffect(() => {
    loadMore()
  }, [])

  return {
    users,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
  }
}

export function useUserProfile(userAddress?: string) {
  const { account } = useWeb3React()
  const [user, setUser] = useState<UserDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const targetAddress = userAddress || account

  useEffect(() => {
    async function loadUser() {
      if (!targetAddress) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        const userDetails = await fetchUserDetails(targetAddress)
        setUser(userDetails)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [targetAddress])

  return {
    user,
    loading,
    error,
    isOwnProfile: targetAddress === account,
  }
}

export function useDailyLeaderboard(date?: Date) {
  const [leaders, setLeaders] = useState<UserDayData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadDailyLeaders() {
      try {
        setLoading(true)
        setError(null)
        const dailyLeaders = await fetchDailyLeaders(date)
        setLeaders(dailyLeaders)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadDailyLeaders()
  }, [date])

  return {
    leaders,
    loading,
    error,
  }
}
