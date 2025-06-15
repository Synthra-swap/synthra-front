import { useEffect, useState } from 'react'
import { Currency, Token } from '@synthra-swap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { useWeb3React } from '@web3-react/core'

const SUBGRAPH_URL = 'https://subgraph.synthra.org/subgraphs/name/ianlapham/uniswap-v3-sub'

interface SubgraphPool {
  id: string
  token0: {
    id: string
    symbol: string
    name: string
    decimals: string
  }
  token1: {
    id: string
    symbol: string
    name: string
    decimals: string
  }
  feeTier: string
  liquidity: string
  totalValueLockedUSD: string
  volumeUSD: string
  feesUSD: string
  txCount: string
}

interface FormattedPoolData {
  token0: Currency
  token1: Currency
  fee: FeeAmount
  liquidity: string
  volume24h: string
  fees24h: string
  apr: string
  tvlUSD: string
}

const POOLS_QUERY = `
  query GetTopPools {
    pools(
      first: 15
      orderBy: totalValueLockedUSD
      orderDirection: desc
      where: { totalValueLockedUSD_gt: "1000" }
    ) {
      id
      token0 {
        id
        symbol
        name
        decimals
      }
      token1 {
        id
        symbol
        name
        decimals
      }
      feeTier
      liquidity
      totalValueLockedUSD
      volumeUSD
      feesUSD
      txCount
    }
  }
`

async function fetchSubgraphData(): Promise<SubgraphPool[]> {
  try {
    const response = await fetch(SUBGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: POOLS_QUERY,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    return data.data?.pools || []
  } catch (error) {
    console.error('Error fetching subgraph data:', error)
    throw error
  }
}

function createTokenFromSubgraph(tokenData: SubgraphPool['token0'], chainId: number): Token {
  return new Token(
    chainId,
    tokenData.id,
    parseInt(tokenData.decimals),
    tokenData.symbol,
    tokenData.name
  )
}

function formatLiquidity(valueUSD: string): string {
  const value = parseFloat(valueUSD)
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}K`
  }
  return value.toFixed(2)
}

function formatVolume(volumeUSD: string): string {
  const value = parseFloat(volumeUSD)
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(2)}K`
  }
  return `$${value.toFixed(2)}`
}

function calculateAPR(feesUSD: string, totalValueLockedUSD: string): string {
  const fees = parseFloat(feesUSD)
  const tvl = parseFloat(totalValueLockedUSD)
  
  if (tvl === 0) return '0.00'
  
  // Stima APR basata sui fee giornalieri * 365
  const dailyReturn = fees / tvl
  const apr = dailyReturn * 365 * 100
  
  return apr.toFixed(2)
}

export function useSubgraphPools() {
  const { chainId } = useWeb3React()
  const [pools, setPools] = useState<FormattedPoolData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPools() {
      if (!chainId) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        
        const subgraphPools = await fetchSubgraphData()
        
        const formattedPools: FormattedPoolData[] = subgraphPools.map((pool) => {
          const token0 = createTokenFromSubgraph(pool.token0, chainId)
          const token1 = createTokenFromSubgraph(pool.token1, chainId)
          
          // Converti il feeTier da stringa a FeeAmount
          let fee: FeeAmount
          switch (pool.feeTier) {
            case '100':
              fee = FeeAmount.LOWEST
              break
            case '500':
              fee = FeeAmount.LOW
              break
            case '3000':
              fee = FeeAmount.MEDIUM
              break
            case '10000':
              fee = FeeAmount.HIGH
              break
            default:
              fee = FeeAmount.MEDIUM
          }

          return {
            token0,
            token1,
            fee,
            liquidity: pool.liquidity,
            volume24h: formatVolume(pool.volumeUSD),
            fees24h: formatVolume(pool.feesUSD),
            apr: calculateAPR(pool.feesUSD, pool.totalValueLockedUSD),
            tvlUSD: formatLiquidity(pool.totalValueLockedUSD),
          }
        })

        setPools(formattedPools)
      } catch (err) {
        console.error('Error loading pools:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadPools()
  }, [chainId])

  return { pools, loading, error }
}
