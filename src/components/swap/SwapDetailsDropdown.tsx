import { Trans } from '@lingui/macro'
import { Percent } from '@synthra-swap/sdk-core'
import AnimatedDropdown from 'components/AnimatedDropdown'
import Column from 'components/Column'
import { LoadingOpacityContainer } from 'components/Loader/styled'
import { RowBetween, RowFixed } from 'components/Row'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { InterfaceTrade } from 'state/routing/types'
import { isSubmittableTrade } from 'state/routing/utils'
import styled, { useTheme } from 'styled-components'
import { Separator, ThemedText } from 'theme/components'
import { useFormatter } from 'utils/formatNumbers'

import GasEstimateTooltip from './GasEstimateTooltip'
import SwapLineItem, { SwapLineItemType } from './SwapLineItem'
import TradePrice from './TradePrice'

const StyledHeaderRow = styled(RowBetween)<{ disabled: boolean; open: boolean }>`
  padding: 0;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`

const RotatingArrow = styled(ChevronDown)<{ open?: boolean }>`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
  transition: transform 0.1s linear;
`

const SwapDetailsWrapper = styled(Column)`
  padding-top: ${({ theme }) => theme.grids.md};
`

const Wrapper = styled(Column)`
  border: 1px solid ${({ theme }) => theme.surface3};
  border-radius: 16px;
  padding: 12px 16px;
`

interface SwapDetailsProps {
  trade?: InterfaceTrade
  syncing: boolean
  loading: boolean
  allowedSlippage: Percent
}

export default function SwapDetailsDropdown(props: SwapDetailsProps) {
  const { trade, syncing, loading } = props
  const theme = useTheme()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Wrapper>
      <StyledHeaderRow
        data-testid="swap-details-header-row"
        onClick={() => setShowDetails(!showDetails)}
        disabled={!trade}
        open={showDetails}
      >
        <RowFixed>
          {trade ? (
            <LoadingOpacityContainer $loading={syncing} data-testid="trade-price-container">
              <TradePrice price={trade.executionPrice} />
            </LoadingOpacityContainer>
          ) : loading || syncing ? (
            <ThemedText.DeprecatedMain fontSize={14}>
              <Trans>Fetching best price...</Trans>
            </ThemedText.DeprecatedMain>
          ) : null}
        </RowFixed>
        <RowFixed gap="xs">
          {!showDetails && isSubmittableTrade(trade) && (
            <GasEstimateTooltip trade={trade} loading={syncing || loading} />
          )}
          <RotatingArrow stroke={trade ? theme.neutral3 : theme.surface2} open={Boolean(trade && showDetails)} />
        </RowFixed>
      </StyledHeaderRow>
      <AdvancedSwapDetails {...props} open={showDetails} />
    </Wrapper>
  )
}

function AdvancedSwapDetails(props: SwapDetailsProps & { open: boolean }) {
  const { open, trade, allowedSlippage, syncing = false } = props
  const format = useFormatter()

  if (!trade) return null

  const lineItemProps = { trade, allowedSlippage, format, syncing }

  return (
    <AnimatedDropdown open={open}>
      <SwapDetailsWrapper gap="md" data-testid="advanced-swap-details">
        <Separator />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.PRICE_IMPACT} />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.MAX_SLIPPAGE} />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.INPUT_TOKEN_FEE_ON_TRANSFER} />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.OUTPUT_TOKEN_FEE_ON_TRANSFER} />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.NETWORK_COST} />
        <Separator />
        <SwapLineItem {...lineItemProps} type={SwapLineItemType.ROUTING_INFO} />
      </SwapDetailsWrapper>
    </AnimatedDropdown>
  )
}
