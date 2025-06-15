import { FeeAmount } from '@uniswap/v3-sdk'
import { Currency, Token } from '@synthra-swap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { ButtonPrimary } from 'components/Button'
import { DarkCard, LightCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import DoubleCurrencyLogo from 'components/DoubleLogo'
import { LoadingRows } from 'components/Loader/styled'
import { RowBetween, RowFixed } from 'components/Row'
import { MouseoverTooltip } from 'components/Tooltip'
import { PoolState, usePool } from 'hooks/usePools'
import { useSubgraphPools } from 'hooks/useSubgraphPools'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { ThemedText } from 'theme/components'
import { currencyId } from 'utils/currencyId'

const PageWrapper = styled.div`
  padding: 100px 24px 0px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    max-width: 1000px;
    padding: 80px 20px 0px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    max-width: 800px;
    padding: 60px 16px 0px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    max-width: 100%;
    padding: 40px 12px 0px;
  }
`

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 48px;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    margin-bottom: 32px;
  }
`

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent1} 0%, ${({ theme }) => theme.accent2} 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    font-size: 36px;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 28px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.neutral2};
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    font-size: 16px;
  }
`

const StatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 4px;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`

const PoolCount = styled.div`
  color: ${({ theme }) => theme.neutral2};
  font-size: 16px;
  font-weight: 500;
`

const StyledPoolCard = styled.div`
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 24px;
  padding: 24px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1} 0%, ${({ theme }) => theme.accent2} 100%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.accent1};
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    
    &:before {
      opacity: 1;
    }
  }
`

const PoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    flex-direction: column;
    gap: 16px;
  }
`

const PoolTokens = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const TokenPair = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
`

const FeeTag = styled.div`
  background: ${({ theme }) => theme.accent1};
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StatLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.neutral3};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`

const StatValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutral1};
`

const HighlightStat = styled(StatValue)`
  color: ${({ theme }) => theme.success};
  font-size: 18px;
`

const StakeButton = styled(ButtonPrimary)`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent1} 0%, ${({ theme }) => theme.accent2} 100%);
  border: none;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding: 14px;
    font-size: 15px;
  }
`

const LoadingContainer = styled.div`
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
`

const EmptyContainer = styled.div`
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
`

const ErrorContainer = styled.div`
  background: ${({ theme }) => theme.surface1};
  border: 2px solid ${({ theme }) => theme.critical};
  border-radius: 24px;
  padding: 40px;
  text-align: center;
`

const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }
  
  @media (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

interface PoolInfo {
  token0: Currency
  token1: Currency
  fee: FeeAmount
  liquidity?: string
  volume24h?: string
  fees24h?: string
  apr?: string
  tvlUSD?: string
}

function PoolCard({ poolInfo }: { poolInfo: PoolInfo }) {
  const theme = useTheme()
  const [poolState, pool] = usePool(poolInfo.token0, poolInfo.token1, poolInfo.fee)
  
  const isLoading = poolState === PoolState.LOADING
  const feePercentage = poolInfo.fee / 10000

  if (isLoading) {
    return (
      <StyledPoolCard>
        <LoadingRows>
          <div />
          <div />
          <div />
        </LoadingRows>
      </StyledPoolCard>
    )
  }

  return (
    <StyledPoolCard>
      <PoolHeader>
        <PoolTokens>
          <DoubleCurrencyLogo currency0={poolInfo.token0} currency1={poolInfo.token1} size={32} />
          <TokenInfo>
            <TokenPair>
              {poolInfo.token0.symbol}/{poolInfo.token1.symbol}
            </TokenPair>
            <FeeTag>{feePercentage}% Fee</FeeTag>
          </TokenInfo>
        </PoolTokens>
      </PoolHeader>
      
      <StatsGrid>
        <StatItem>
          <StatLabel>Total Value Locked</StatLabel>
          <StatValue>${poolInfo.tvlUSD || '---'}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>24h Volume</StatLabel>
          <StatValue>{poolInfo.volume24h || '---'}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>24h Fees</StatLabel>
          <StatValue>{poolInfo.fees24h || '---'}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>APR</StatLabel>
          <HighlightStat>{poolInfo.apr ? `${poolInfo.apr}%` : '---'}</HighlightStat>
        </StatItem>
      </StatsGrid>

      <StakeButton
        as={Link}
        to={`/add/${currencyId(poolInfo.token0)}/${currencyId(poolInfo.token1)}/${poolInfo.fee}`}
      >
        <p>Add Liquidity & Earn</p>
      </StakeButton>
    </StyledPoolCard>
  )
}

export default function Earn() {
  const theme = useTheme()
  const { chainId } = useWeb3React()
  const { pools, loading, error } = useSubgraphPools()

  if (!chainId) {
    return (
      <PageWrapper>
        <HeaderSection>
          <MainTitle>Connect Wallet</MainTitle>
          <Subtitle>Connect your wallet to explore earning opportunities</Subtitle>
        </HeaderSection>
        <EmptyContainer>
          <ThemedText.HeadlineSmall style={{ marginBottom: '16px' }}>
            <p>🔗 Wallet Connection Required</p>
          </ThemedText.HeadlineSmall>
          <ThemedText.BodyPrimary>
            <p>Connect your wallet to view the top liquidity pools and start earning rewards.</p>
          </ThemedText.BodyPrimary>
        </EmptyContainer>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <HeaderSection>
        <MainTitle>Earn Rewards</MainTitle>
        <Subtitle>
          Provide liquidity to top-performing pools and earn trading fees plus rewards. 
          Higher TVL pools typically offer more stable and consistent returns.
        </Subtitle>
      </HeaderSection>

      {error ? (
        <ErrorContainer>
          <ThemedText.HeadlineSmall style={{ marginBottom: '16px', color: theme.critical }}>
            <p>⚠️ Connection Error</p>
          </ThemedText.HeadlineSmall>
          <ThemedText.BodyPrimary color={theme.critical} style={{ marginBottom: '8px' }}>
            <p>Failed to load pool data: {error}</p>
          </ThemedText.BodyPrimary>
          <ThemedText.Caption style={{ color: theme.neutral2 }}>
            <p>Please check your connection and try again</p>
          </ThemedText.Caption>
        </ErrorContainer>
      ) : loading ? (
        <LoadingContainer>
          <ThemedText.HeadlineSmall style={{ marginBottom: '24px' }}>
            <p>🔄 Loading Pools...</p>
          </ThemedText.HeadlineSmall>
          <ThemedText.BodyPrimary style={{ marginBottom: '20px' }}>
            <p>Fetching the latest pool data from the network</p>
          </ThemedText.BodyPrimary>
          <LoadingRows>
            <div />
            <div />
            <div />
          </LoadingRows>
        </LoadingContainer>
      ) : pools.length === 0 ? (
        <EmptyContainer>
          <ThemedText.HeadlineSmall style={{ marginBottom: '16px' }}>
            <p>📊 No Pools Available</p>
          </ThemedText.HeadlineSmall>
          <ThemedText.BodyPrimary>
            <p>No liquidity pools are currently available on this network. Try switching to a different network.</p>
          </ThemedText.BodyPrimary>
        </EmptyContainer>
      ) : (
        <>
          <StatsHeader>
            <PoolCount>
              <p>Showing {pools.length} top liquidity pools</p>
            </PoolCount>
          </StatsHeader>
          <GridContainer>
            {pools.map((poolInfo, index) => (
              <PoolCard
                key={`${poolInfo.token0.wrapped.address}-${poolInfo.token1.wrapped.address}-${poolInfo.fee}`}
                poolInfo={poolInfo}
              />
            ))}
          </GridContainer>
        </>
      )}
    </PageWrapper>
  )
}
