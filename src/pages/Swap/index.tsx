import { Trans } from '@lingui/macro'
import { ComponentType } from 'react';
import { ChainId, Currency, CurrencyAmount, Percent, Token } from '@synthra-swap/sdk-core'
import { UNIVERSAL_ROUTER_ADDRESS } from '@synthra-swap/universal-router-sdk'
import { useWeb3React } from '@web3-react/core'
import { useToggleAccountDrawer } from 'components/AccountDrawer'
import AddressInputPanel from 'components/AddressInputPanel'
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { ButtonError, ButtonLight, ButtonPrimary } from 'components/Button'
import { GrayCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import SwapCurrencyInputPanel from 'components/CurrencyInputPanel/SwapCurrencyInputPanel'
import { NetworkAlert } from 'components/NetworkAlert/NetworkAlert'
import { AutoRow } from 'components/Row'
import confirmPriceImpactWithoutFee from 'components/swap/confirmPriceImpactWithoutFee'
import ConfirmSwapModal from 'components/swap/ConfirmSwapModal'
import PriceImpactModal from 'components/swap/PriceImpactModal'
import PriceImpactWarning from 'components/swap/PriceImpactWarning'
import {  PageWrapper } from 'components/swap/styled'
import SwapDetailsDropdown from 'components/swap/SwapDetailsDropdown'
import SwapHeader from 'components/swap/SwapHeader'
import { SwitchLocaleLink } from 'components/SwitchLocaleLink'
import TokenSafetyModal from 'components/TokenSafety/TokenSafetyModal'
import { useConnectionReady } from 'connection/eagerlyConnect'
import { getChainInfo } from 'constants/chainInfo'
import { asSupportedChain, isSupportedChain } from 'constants/chains'
import { getSwapCurrencyId, TOKEN_SHORTHANDS } from 'constants/tokens'
import { useCurrency, useDefaultActiveTokens } from 'hooks/Tokens'
import { useIsSwapUnsupported } from 'hooks/useIsSwapUnsupported'
import { useMaxAmountIn } from 'hooks/useMaxAmountIn'
import usePermit2Allowance, { AllowanceState } from 'hooks/usePermit2Allowance'
import usePrevious from 'hooks/usePrevious'
import { SwapResult, useSwapCallback } from 'hooks/useSwapCallback'
import { useSwitchChain } from 'hooks/useSwitchChain'
import { useUSDPrice } from 'hooks/useUSDPrice'
import useWrapCallback, { WrapErrorText, WrapType } from 'hooks/useWrapCallback'
import JSBI from 'jsbi'
import { ReactNode, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { ArrowDown, ChevronDown } from 'react-feather'
import { useLocation, useNavigate } from 'react-router-dom'
import { Text } from 'rebass'
import { useAppSelector } from 'state/hooks'
import { InterfaceTrade, TradeState } from 'state/routing/types'
import { isClassicTrade, isPreviewTrade } from 'state/routing/utils'
import { Field, forceExactInput, replaceSwapState } from 'state/swap/actions'
import { useDefaultsFromURLSearch, useDerivedSwapInfo, useSwapActionHandlers } from 'state/swap/hooks'
import swapReducer, { initialState as initialSwapState, SwapState } from 'state/swap/reducer'
import styled, { useTheme } from 'styled-components'
import { LinkStyledButton, ThemedText } from 'theme/components'
import { computeFiatValuePriceImpact } from 'utils/computeFiatValuePriceImpact'
import { NumberType, useFormatter } from 'utils/formatNumbers'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { computeRealizedPriceImpact, warningSeverity } from 'utils/prices'
import { didUserReject } from 'utils/swapErrorToUserReadableMessage'
import BannerSlider from './BannerSlider';
import { useIsDarkMode } from '../../theme/components/ThemeToggle'
import { OutputTaxTooltipBody } from './TaxTooltipBody'

export const ArrowWrapper = styled.div`
  background-color: ${({ theme }) => theme.surface1};
  border-radius: 50%;
  padding: 4px;
  height: 40px;
  width: 40px;
  position: relative;
  margin: -18px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  backdrop-filter: blur(10px);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: scale(1.05) rotate(180deg);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.18);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledButtonPrimary = styled(ButtonPrimary as any)`
  margin-top: 20px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 28px;
  background: linear-gradient(135deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    filter: brightness(1.05);
  }
  
  &:not(:disabled):active {
    transform: translateY(1px);
    filter: brightness(0.95);
  }
`;

const LoadingAnimation = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 8px 0 0;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.accent1};
  animation: spinner 0.8s linear infinite;
  display: inline-block;
  vertical-align: middle;
  
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

interface DetailsDropdownAnimationProps {
  isVisible: boolean;
}

const DetailsDropdownAnimation = styled.div<DetailsDropdownAnimationProps>`
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  max-height: ${props => (props.isVisible ? '500px' : '0')};
  opacity: ${props => (props.isVisible ? '1' : '0')};
  margin-top: ${props => (props.isVisible ? '12px' : '0')};
  backdrop-filter: blur(8px);
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.surface1}80, ${theme.surface1}40)`};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const PriceImpactWarningAnimation = styled.div`
  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledButtonError = styled(ButtonError)`
  margin-top: 20px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 28px;
  background: ${props => props.error ? 
    'linear-gradient(135deg, #ff4d4d, #ff6b6b)' : 
    `linear-gradient(135deg, ${props.theme.accent1}, ${props.theme.accent2})`};
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  
  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    filter: brightness(1.05);
  }
  
  &:not(:disabled):active {
    transform: translateY(1px);
    filter: brightness(0.95);
  }
`;

export const SwapWrapper = styled.div`
  position: relative;
  max-width: 550px;
  width: 100%;
  padding: 32px 28px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.surface1}90, ${theme.surface1}60)`};
  backdrop-filter: blur(15px);
  border-radius: 28px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent1}, ${({ theme }) => theme.accent2});
    opacity: 0.9;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 150%;
    background: radial-gradient(circle at top left, ${({ theme }) => `${theme.accent1}10`}, transparent 70%);
    z-index: -1;
  }
`;

export const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  svg {
    transition: stroke 0.2s ease;
  }
  
  &:hover svg {
    stroke: ${({ theme }) => theme.accent1};
  }
`;


const SwapSection = styled.div`
  background-color: ${({ theme }) => `${theme.surface2}80`};
  backdrop-filter: blur(10px);
  border-radius: 24px;
  color: ${({ theme }) => theme.neutral2};
  font-size: 14px;
  font-weight: 500;
  height: 120px;
  line-height: 20px;
  padding: 18px;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 4px;
  
  &:before {
    box-sizing: border-box;
    background-size: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: border-color 0.2s ease;
  }

  &:hover:before {
    border-color: rgba(255, 255, 255, 0.1);
  }

  &:focus-within:before {
    border-color: ${({ theme }) => theme.accent1}40;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.accent1}20;
  }
`;

const OutputSwapSection = styled(SwapSection)`
  border-bottom: none;
  margin-top: 4px;
  
  &:before {
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
`;


const AnimatedSwapDetailsDropdown = ({ trade, syncing, loading, allowedSlippage }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <>
      <div 
        onClick={() => setIsVisible(!isVisible)} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '12px 16px',
          borderRadius: '16px',
          marginTop: '12px',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.2s ease'
        }}
      >
        <Text fontSize={14} fontWeight={500}>Transaction details</Text>
        <animated.div style={{ 
          transform: useSpring({ 
            rotation: isVisible ? 180 : 0 
          }).rotation.to(r => `rotate(${r}deg)`) 
        }}>
          <ChevronDown size={16} />
        </animated.div>
      </div>
      
      <DetailsDropdownAnimation isVisible={isVisible}>
        <div style={{ padding: '16px' }}>
          <SwapDetailsDropdown 
            trade={trade}
            syncing={syncing}
            loading={loading}
            allowedSlippage={allowedSlippage}
          />
        </div>
      </DetailsDropdownAnimation>
    </>
  );
};


const AnimatedSwapArrow = ({ onClick, disabled, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  
  return (
    <ArrowWrapper 
      clickable={!disabled} 
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ArrowContainer>
        <animated.div >
          <ArrowDown size="16" color={color} />
        </animated.div>
      </ArrowContainer>
    </ArrowWrapper>
  );
};

const SwapButton = ({ onClick, disabled, swapInputError, routeIsSyncing, routeIsLoading, priceImpactSeverity }) => {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      <StyledButtonError
        onClick={onClick}
        id="swap-button"
        data-testid="swap-button"
        disabled={disabled}
        error={!swapInputError && priceImpactSeverity > 2}
      >
        <Text fontSize={18} fontWeight={600}>
          {swapInputError ? (
            swapInputError
          ) : routeIsSyncing || routeIsLoading ? (
            <>
              <LoadingAnimation />
              <Trans>Calculating</Trans>
            </>
          ) : priceImpactSeverity > 2 ? (
            <Trans>Swap anyway</Trans>
          ) : (
            <Trans>Swap</Trans>
          )}
        </Text>
      </StyledButtonError>
    </motion.div>
  );
};

function getIsReviewableQuote(
  trade: InterfaceTrade | undefined,
  tradeState: TradeState,
  swapInputError?: ReactNode
): boolean {
  if (swapInputError) return false
  // if the current quote is a preview quote, allow the user to progress to the Swap review screen
  if (isPreviewTrade(trade)) return true

  return Boolean(trade && tradeState === TradeState.VALID)
}

function largerPercentValue(a?: Percent, b?: Percent) {
  if (a && b) {
    return a.greaterThan(b) ? a : b
  } else if (a) {
    return a
  } else if (b) {
    return b
  }
  return undefined
}

export default function SwapPage({ className }: { className?: string }) {
  const { chainId: connectedChainId } = useWeb3React()
  const loadedUrlParams = useDefaultsFromURLSearch()
  const location = useLocation()
  const supportedChainId = asSupportedChain(connectedChainId)

  return (
    <>
      <PageWrapper>
        {/* Banner slider is now positioned absolutely, so it doesn't need to be before Swap */}
        <Swap
          className={className}
          chainId={ChainId.UOMI}
          initialInputCurrencyId={loadedUrlParams?.[Field.INPUT]?.currencyId}
          initialOutputCurrencyId={loadedUrlParams?.[Field.OUTPUT]?.currencyId}
          disableTokenInputs={supportedChainId === undefined}
        />
        {location.pathname === '/swap' && <BannerSlider />}
        <NetworkAlert />
      </PageWrapper>
      {location.pathname === '/swap' && <SwitchLocaleLink />}
    </>
  )
}

/**
 * The swap component displays the swap interface, manages state for the swap, and triggers onchain swaps.
 *
 * In most cases, chainId should refer to the connected chain, i.e. `useWeb3React().chainId`.
 * However if this component is being used in a context that displays information from a different, unconnected
 * chain (e.g. the TDP), then chainId should refer to the unconnected chain.
 */
function Swap({
  className,
  initialInputCurrencyId,
  initialOutputCurrencyId,
  chainId,
  onCurrencyChange,
  disableTokenInputs = false,
}: {
  className?: string
  initialInputCurrencyId?: string | null
  initialOutputCurrencyId?: string | null
  chainId?: ChainId
  onCurrencyChange?: (selected: Pick<SwapState, Field.INPUT | Field.OUTPUT>) => void
  disableTokenInputs?: boolean
}) {
  const connectionReady = useConnectionReady()
  const { account, chainId: connectedChainId, connector } = useWeb3React()

  // token warning stuff
  const prefilledInputCurrency = useCurrency(initialInputCurrencyId)
  const prefilledOutputCurrency = useCurrency(initialOutputCurrencyId)

  const [loadedInputCurrency, setLoadedInputCurrency] = useState(prefilledInputCurrency)
  const [loadedOutputCurrency, setLoadedOutputCurrency] = useState(prefilledOutputCurrency)

  useEffect(() => {
    setLoadedInputCurrency(prefilledInputCurrency)
    setLoadedOutputCurrency(prefilledOutputCurrency)
  }, [prefilledInputCurrency, prefilledOutputCurrency])

  const [dismissTokenWarning, setDismissTokenWarning] = useState<boolean>(false)
  const [showPriceImpactModal, setShowPriceImpactModal] = useState<boolean>(false)

  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c?.isToken ?? false) ?? [],
    [loadedInputCurrency, loadedOutputCurrency]
  )
  const handleConfirmTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
  }, [])

  // dismiss warning if all imported tokens are in active lists
  const defaultTokens = useDefaultActiveTokens(chainId)
  const importTokensNotInDefault = useMemo(
    () =>
      urlLoadedTokens &&
      urlLoadedTokens
        .filter((token: Token) => {
          return !(token.address in defaultTokens)
        })
        .filter((token: Token) => {
          // Any token addresses that are loaded from the shorthands map do not need to show the import URL
          const supported = asSupportedChain(chainId)
          if (!supported) return true
          return !Object.keys(TOKEN_SHORTHANDS).some((shorthand) => {
            const shorthandTokenAddress = TOKEN_SHORTHANDS[shorthand][supported]
            return shorthandTokenAddress && shorthandTokenAddress === token.address
          })
        }),
    [chainId, defaultTokens, urlLoadedTokens]
  )

  const theme = useTheme()

  // toggle wallet when disconnected
  const toggleWalletDrawer = useToggleAccountDrawer()

  // swap state
  const prefilledState = useMemo(
    () => ({
      [Field.INPUT]: { currencyId: initialInputCurrencyId },
      [Field.OUTPUT]: { currencyId: initialOutputCurrencyId },
    }),
    [initialInputCurrencyId, initialOutputCurrencyId]
  )
  const [state, dispatch] = useReducer(swapReducer, { ...initialSwapState, ...prefilledState })
  const { typedValue, recipient, independentField } = state

  const previousConnectedChainId = usePrevious(connectedChainId)
  const previousPrefilledState = usePrevious(prefilledState)
  useEffect(() => {
    const combinedInitialState = { ...initialSwapState, ...prefilledState }
    const chainChanged = previousConnectedChainId && previousConnectedChainId !== connectedChainId
    const prefilledInputChanged =
      previousPrefilledState &&
      previousPrefilledState?.[Field.INPUT]?.currencyId !== prefilledState?.[Field.INPUT]?.currencyId
    const prefilledOutputChanged =
      previousPrefilledState &&
      previousPrefilledState?.[Field.OUTPUT]?.currencyId !== prefilledState?.[Field.OUTPUT]?.currencyId
    if (chainChanged || prefilledInputChanged || prefilledOutputChanged) {
      dispatch(
        replaceSwapState({
          ...initialSwapState,
          ...prefilledState,
          field: combinedInitialState.independentField ?? Field.INPUT,
          inputCurrencyId: combinedInitialState.INPUT.currencyId ?? undefined,
          outputCurrencyId: combinedInitialState.OUTPUT.currencyId ?? undefined,
        })
      )
      // reset local state
      setSwapState({
        tradeToConfirm: undefined,
        swapError: undefined,
        showConfirm: false,
        swapResult: undefined,
      })
    }
  }, [connectedChainId, prefilledState, previousConnectedChainId, previousPrefilledState])

  const swapInfo = useDerivedSwapInfo(state, chainId)
  const {
    trade: { state: tradeState, trade, swapQuoteLatency },
    allowedSlippage,
    autoSlippage,
    currencyBalances,
    parsedAmount,
    currencies,
    inputError: swapInputError,
    inputTax,
    outputTax,
  } = swapInfo

  const [inputTokenHasTax, outputTokenHasTax] = useMemo(
    () => [!inputTax.equalTo(0), !outputTax.equalTo(0)],
    [inputTax, outputTax]
  )

  useEffect(() => {
    // Force exact input if the user switches to an output token with tax
    if (outputTokenHasTax && independentField === Field.OUTPUT) dispatch(forceExactInput())
  }, [independentField, outputTokenHasTax, trade?.outputAmount])

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue)
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE

  const parsedAmounts = useMemo(
    () =>
      showWrap
        ? {
            [Field.INPUT]: parsedAmount,
            [Field.OUTPUT]: parsedAmount,
          }
        : {
            [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
            [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.postTaxOutputAmount,
          },
    [independentField, parsedAmount, showWrap, trade]
  )

  const showFiatValueInput = Boolean(parsedAmounts[Field.INPUT])
  const showFiatValueOutput = Boolean(parsedAmounts[Field.OUTPUT])

  const fiatValueInput = useUSDPrice(
    parsedAmounts[Field.INPUT] && showFiatValueInput ? parsedAmounts[Field.INPUT] : undefined
  )
  const fiatValueOutput = useUSDPrice(
    parsedAmounts[Field.OUTPUT] && showFiatValueOutput ? parsedAmounts[Field.OUTPUT] : undefined
  )

  const [routeNotFound, routeIsLoading, routeIsSyncing] = useMemo(
    () => [
      tradeState === TradeState.NO_ROUTE_FOUND,
      tradeState === TradeState.LOADING,
      tradeState === TradeState.LOADING && Boolean(trade),
    ],
    [trade, tradeState]
  )

  const fiatValueTradeInput = useUSDPrice(trade?.inputAmount)
  const fiatValueTradeOutput = useUSDPrice(trade?.postTaxOutputAmount)
  const preTaxFiatValueTradeOutput = useUSDPrice(trade?.outputAmount)
  const [stablecoinPriceImpact, preTaxStablecoinPriceImpact] = useMemo(
    () =>
      routeIsSyncing || !isClassicTrade(trade)
        ? [undefined, undefined]
        : [
            computeFiatValuePriceImpact(fiatValueTradeInput.data, fiatValueTradeOutput.data),
            computeFiatValuePriceImpact(fiatValueTradeInput.data, preTaxFiatValueTradeOutput.data),
          ],
    [fiatValueTradeInput, fiatValueTradeOutput, preTaxFiatValueTradeOutput, routeIsSyncing, trade]
  )

  const { onSwitchTokens, onCurrencySelection, onUserInput, onChangeRecipient } = useSwapActionHandlers(dispatch)
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput]
  )
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value)
    },
    [onUserInput]
  )

  const navigate = useNavigate()
  const swapIsUnsupported = useIsSwapUnsupported(currencies[Field.INPUT], currencies[Field.OUTPUT])

  // reset if they close warning without tokens in params
  const handleDismissTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
    navigate('/swap/')
  }, [navigate])

  // modal and loading
  const [{ showConfirm, tradeToConfirm, swapError, swapResult }, setSwapState] = useState<{
    showConfirm: boolean
    tradeToConfirm?: InterfaceTrade
    swapError?: Error
    swapResult?: SwapResult
  }>({
    showConfirm: false,
    tradeToConfirm: undefined,
    swapError: undefined,
    swapResult: undefined,
  })

  const { formatCurrencyAmount } = useFormatter()
  const formattedAmounts = useMemo(
    () => ({
      [independentField]: typedValue,
      [dependentField]: showWrap
        ? parsedAmounts[independentField]?.toExact() ?? ''
        : formatCurrencyAmount({
            amount: parsedAmounts[dependentField],
            type: NumberType.SwapTradeAmount,
            placeholder: '',
          }),
    }),
    [dependentField, formatCurrencyAmount, independentField, parsedAmounts, showWrap, typedValue]
  )

  const userHasSpecifiedInputOutput = Boolean(
    currencies[Field.INPUT] && currencies[Field.OUTPUT] && parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  )

  const maximumAmountIn = useMaxAmountIn(trade, allowedSlippage)
  const allowance = usePermit2Allowance(
    maximumAmountIn ??
      (parsedAmounts[Field.INPUT]?.currency.isToken
        ? (parsedAmounts[Field.INPUT] as CurrencyAmount<Token>)
        : undefined),
    isSupportedChain(chainId) ? "0x197EEAd5Fe3DB82c4Cd55C5752Bc87AEdE11f230" : undefined,
    trade?.fillType
  )

  const maxInputAmount: CurrencyAmount<Currency> | undefined = useMemo(
    () => maxAmountSpend(currencyBalances[Field.INPUT]),
    [currencyBalances]
  )
  const showMaxButton = Boolean(maxInputAmount?.greaterThan(0) && !parsedAmounts[Field.INPUT]?.equalTo(maxInputAmount))
  const swapFiatValues = useMemo(() => {
    return { amountIn: fiatValueTradeInput.data, amountOut: fiatValueTradeOutput.data }
  }, [fiatValueTradeInput, fiatValueTradeOutput])

  // the callback to execute the swap
  const swapCallback = useSwapCallback(
    trade,
    swapFiatValues,
    allowedSlippage,
    allowance.state === AllowanceState.ALLOWED ? allowance.permitSignature : undefined
  )

  const handleContinueToReview = useCallback(() => {
    setSwapState({
      tradeToConfirm: trade,
      swapError: undefined,
      showConfirm: true,
      swapResult: undefined,
    })
  }, [trade])

  const clearSwapState = useCallback(() => {
    setSwapState((currentState) => ({
      ...currentState,
      swapError: undefined,
      swapResult: undefined,
    }))
  }, [])

  const handleSwap = useCallback(() => {
    if (!swapCallback) {
      return
    }
    if (preTaxStablecoinPriceImpact && !confirmPriceImpactWithoutFee(preTaxStablecoinPriceImpact)) {
      return
    }
    swapCallback()
      .then((result) => {
        setSwapState((currentState) => ({
          ...currentState,
          swapError: undefined,
          swapResult: result,
        }))
      })
      .catch((error) => {
        setSwapState((currentState) => ({
          ...currentState,
          swapError: error,
          swapResult: undefined,
        }))
      })
  }, [swapCallback, preTaxStablecoinPriceImpact])

  const handleOnWrap = useCallback(async () => {
    if (!onWrap) return
    try {
      const txHash = await onWrap()
      setSwapState((currentState) => ({
        ...currentState,
        swapError: undefined,
        txHash,
      }))
      onUserInput(Field.INPUT, '')
    } catch (error) {
      console.error('Could not wrap/unwrap', error)
      setSwapState((currentState) => ({
        ...currentState,
        swapError: error,
        txHash: undefined,
      }))
    }
  }, [onUserInput, onWrap])

  // warnings on the greater of fiat value price impact and execution price impact
  const { priceImpactSeverity, largerPriceImpact } = useMemo(() => {
    if (!isClassicTrade(trade)) {
      return { priceImpactSeverity: 0, largerPriceImpact: undefined }
    }

    const marketPriceImpact = trade?.priceImpact ? computeRealizedPriceImpact(trade) : undefined
    const largerPriceImpact = largerPercentValue(marketPriceImpact, preTaxStablecoinPriceImpact)
    return { priceImpactSeverity: warningSeverity(largerPriceImpact), largerPriceImpact }
  }, [preTaxStablecoinPriceImpact, trade])

  const handleConfirmDismiss = useCallback(() => {
    setSwapState((currentState) => ({ ...currentState, showConfirm: false }))
    // If there was a swap, we want to clear the input
    if (swapResult) {
      onUserInput(Field.INPUT, '')
    }
  }, [onUserInput, swapResult])

  const handleAcceptChanges = useCallback(() => {
    setSwapState((currentState) => ({ ...currentState, tradeToConfirm: trade }))
  }, [trade])

  const handleInputSelect = useCallback(
    (inputCurrency: Currency) => {
      onCurrencySelection(Field.INPUT, inputCurrency)
      onCurrencyChange?.({
        [Field.INPUT]: {
          currencyId: getSwapCurrencyId(inputCurrency),
        },
        [Field.OUTPUT]: state[Field.OUTPUT],
      })
    },
    [onCurrencyChange, onCurrencySelection, state]
  )
  const inputCurrencyNumericalInputRef = useRef<HTMLInputElement>(null)

  const handleMaxInput = useCallback(() => {
    maxInputAmount && onUserInput(Field.INPUT, maxInputAmount.toExact())
  }, [maxInputAmount, onUserInput])

  const handleOutputSelect = useCallback(
    (outputCurrency: Currency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency)
      onCurrencyChange?.({
        [Field.INPUT]: state[Field.INPUT],
        [Field.OUTPUT]: {
          currencyId: getSwapCurrencyId(outputCurrency),
        },
      })
    },
    [onCurrencyChange, onCurrencySelection, state]
  )

  const showPriceImpactWarning = isClassicTrade(trade) && largerPriceImpact && priceImpactSeverity > 3

  const prevTrade = usePrevious(trade)
  useEffect(() => {
    if (!trade || prevTrade === trade) return // no new swap quote to log
  }, [prevTrade, trade, allowedSlippage, swapQuoteLatency, inputTax, outputTax])

  const showDetailsDropdown = Boolean(
    !showWrap && userHasSpecifiedInputOutput && (trade || routeIsLoading || routeIsSyncing)
  )

  const inputCurrency = currencies[Field.INPUT] ?? undefined
  const switchChain = useSwitchChain()
  const switchingChain = useAppSelector((state) => state.wallets.switchingChain)
  const isDark = useIsDarkMode()

  const swapElement = (
    <SwapWrapper isDark={isDark} className={className} id="swap-page">
      <TokenSafetyModal
        isOpen={importTokensNotInDefault.length > 0 && !dismissTokenWarning}
        tokenAddress={importTokensNotInDefault[0]?.address}
        secondTokenAddress={importTokensNotInDefault[1]?.address}
        onContinue={handleConfirmTokenWarning}
        onCancel={handleDismissTokenWarning}
        showCancel={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SwapHeader autoSlippage={autoSlippage} chainId={chainId} />
      </motion.div>
      
      {trade && showConfirm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ConfirmSwapModal
            trade={trade}
            inputCurrency={inputCurrency}
            originalTrade={tradeToConfirm}
            onAcceptChanges={handleAcceptChanges}
            onCurrencySelection={onCurrencySelection}
            swapResult={swapResult}
            allowedSlippage={allowedSlippage}
            clearSwapState={clearSwapState}
            onConfirm={handleSwap}
            allowance={allowance}
            swapError={swapError}
            onDismiss={handleConfirmDismiss}
            fiatValueInput={fiatValueTradeInput}
            fiatValueOutput={fiatValueTradeOutput}
          />
        </motion.div>
      )}
      
      {showPriceImpactModal && showPriceImpactWarning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <PriceImpactModal
            priceImpact={largerPriceImpact}
            onDismiss={() => setShowPriceImpactModal(false)}
            onContinue={() => {
              setShowPriceImpactModal(false)
              handleContinueToReview()
            }}
          />
        </motion.div>
      )}
  
      <div style={{ display: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SwapSection>
            <SwapCurrencyInputPanel
              label={<Trans>You pay</Trans>}
              disabled={disableTokenInputs}
              value={formattedAmounts[Field.INPUT]}
              showMaxButton={showMaxButton}
              currency={currencies[Field.INPUT] ?? null}
              onUserInput={handleTypeInput}
              onMax={handleMaxInput}
              fiatValue={showFiatValueInput ? fiatValueInput : undefined}
              onCurrencySelect={handleInputSelect}
              otherCurrency={currencies[Field.OUTPUT]}
              showCommonBases
              loading={independentField === Field.OUTPUT && routeIsSyncing}
              ref={inputCurrencyNumericalInputRef}
            />
          </SwapSection>
        </motion.div>
        
        <AnimatedSwapArrow
          onClick={() => {
            if (disableTokenInputs) return
            onSwitchTokens(inputTokenHasTax, formattedAmounts[dependentField])
          }}
          disabled={disableTokenInputs}
          color={theme.neutral1}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <OutputSwapSection>
            <SwapCurrencyInputPanel
              value={
                independentField === Field.INPUT && (routeIsSyncing || routeIsLoading)
                  ? '...'
                  : formattedAmounts[Field.OUTPUT]
              }
              disabled={disableTokenInputs}
              onUserInput={handleTypeOutput}
              label={<Trans>You receive</Trans>}
              showMaxButton={false}
              hideBalance={false}
              fiatValue={showFiatValueOutput ? fiatValueOutput : undefined}
              priceImpact={stablecoinPriceImpact}
              currency={currencies[Field.OUTPUT] ?? null}
              onCurrencySelect={handleOutputSelect}
              otherCurrency={currencies[Field.INPUT]}
              showCommonBases
              loading={independentField === Field.INPUT && (routeIsSyncing || routeIsLoading)}
              numericalInputSettings={{
                disabled: outputTokenHasTax,
                onDisabledClick: () => inputCurrencyNumericalInputRef.current?.focus(),
                disabledTooltipBody: <OutputTaxTooltipBody currencySymbol={currencies[Field.OUTPUT]?.symbol} />,
              }}
            />
            {recipient !== null && !showWrap ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <AutoRow justify="space-between" style={{ padding: '0 1rem' }}>
                  <ArrowWrapper clickable={false}>
                    <ArrowDown size="16" color={theme.neutral2} />
                  </ArrowWrapper>
                  <LinkStyledButton id="remove-recipient-button" onClick={() => onChangeRecipient(null)}>
                    <Trans>- Remove recipient</Trans>
                  </LinkStyledButton>
                </AutoRow>
                <AddressInputPanel id="recipient" value={recipient} onChange={onChangeRecipient} />
              </motion.div>
            ) : null}
          </OutputSwapSection>
        </motion.div>
      </div>
      
      <AutoColumn gap="xs">
        {showDetailsDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <AnimatedSwapDetailsDropdown
              trade={trade}
              syncing={routeIsSyncing}
              loading={routeIsLoading}
              allowedSlippage={allowedSlippage}
            />
          </motion.div>
        )}
        
        {showPriceImpactWarning && (
          <PriceImpactWarningAnimation>
            <PriceImpactWarning priceImpact={largerPriceImpact} />
          </PriceImpactWarningAnimation>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {swapIsUnsupported ? (
            <StyledButtonPrimary $borderRadius="16px" disabled={true}>
              <ThemedText.DeprecatedMain mb="4px">
                <Trans>Unsupported asset</Trans>
              </ThemedText.DeprecatedMain>
            </StyledButtonPrimary>
          ) : switchingChain ? (
            <StyledButtonPrimary $borderRadius="16px" disabled={true}>
              <motion.div
                animate={{ 
                  opacity: [0.6, 1, 0.6], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 
                }}
              >
                <Trans>Connecting to {getChainInfo(switchingChain)?.label}</Trans>
              </motion.div>
            </StyledButtonPrimary>
          ) : connectionReady && !account ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ButtonLight onClick={toggleWalletDrawer} fontWeight={535} $borderRadius="16px">
                <Trans>Connect wallet</Trans>
              </ButtonLight>
            </motion.div>
          ) : chainId && chainId !== connectedChainId ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <StyledButtonPrimary
                $borderRadius="16px"
                onClick={async () => {
                  try {
                    await switchChain(connector, chainId)
                  } catch (error) {
                    if (didUserReject(error)) {
                      // Ignore error, which keeps the user on the previous chain.
                    } else {
                      throw error
                    }
                  }
                }}
              >
                Connect to {getChainInfo(chainId)?.label}
              </StyledButtonPrimary>
            </motion.div>
          ) : showWrap ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <StyledButtonPrimary
                $borderRadius="16px"
                disabled={Boolean(wrapInputError)}
                onClick={handleOnWrap}
                fontWeight={535}
                data-testid="wrap-button"
              >
                {wrapInputError ? (
                  <WrapErrorText wrapInputError={wrapInputError} />
                ) : wrapType === WrapType.WRAP ? (
                  <Trans>Wrap</Trans>
                ) : wrapType === WrapType.UNWRAP ? (
                  <Trans>Unwrap</Trans>
                ) : null}
              </StyledButtonPrimary>
            </motion.div>
          ) : routeNotFound && userHasSpecifiedInputOutput && !routeIsLoading && !routeIsSyncing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GrayCard style={{ textAlign: 'center' }}>
                <ThemedText.DeprecatedMain mb="4px">
                  <Trans>Insufficient liquidity for this trade.</Trans>
                </ThemedText.DeprecatedMain>
              </GrayCard>
            </motion.div>
          ) : (
            <SwapButton
              onClick={() => {
                showPriceImpactWarning ? setShowPriceImpactModal(true) : handleContinueToReview()
              }}
              disabled={!getIsReviewableQuote(trade, tradeState, swapInputError)}
              swapInputError={swapInputError}
              routeIsSyncing={routeIsSyncing}
              routeIsLoading={routeIsLoading}
              priceImpactSeverity={priceImpactSeverity}
            />
          )}
        </motion.div>
      </AutoColumn>
    </SwapWrapper>
  );

  return (
  <>
    <SwapWrapper className={className} id="swap-page">
      <TokenSafetyModal
        isOpen={importTokensNotInDefault.length > 0 && !dismissTokenWarning}
        tokenAddress={importTokensNotInDefault[0]?.address}
        secondTokenAddress={importTokensNotInDefault[1]?.address}
        onContinue={handleConfirmTokenWarning}
        onCancel={handleDismissTokenWarning}
        showCancel={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SwapHeader autoSlippage={autoSlippage} chainId={chainId} />
      </motion.div>
      
      {trade && showConfirm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ConfirmSwapModal
            trade={trade}
            inputCurrency={inputCurrency}
            originalTrade={tradeToConfirm}
            onAcceptChanges={handleAcceptChanges}
            onCurrencySelection={onCurrencySelection}
            swapResult={swapResult}
            allowedSlippage={allowedSlippage}
            clearSwapState={clearSwapState}
            onConfirm={handleSwap}
            allowance={allowance}
            swapError={swapError}
            onDismiss={handleConfirmDismiss}
            fiatValueInput={fiatValueTradeInput}
            fiatValueOutput={fiatValueTradeOutput}
          />
        </motion.div>
      )}
      
      {showPriceImpactModal && showPriceImpactWarning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <PriceImpactModal
            priceImpact={largerPriceImpact}
            onDismiss={() => setShowPriceImpactModal(false)}
            onContinue={() => {
              setShowPriceImpactModal(false)
              handleContinueToReview()
            }}
          />
        </motion.div>
      )}
  
      <div style={{ display: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SwapSection>
            <SwapCurrencyInputPanel
              label={<Trans>You pay</Trans>}
              disabled={disableTokenInputs}
              value={formattedAmounts[Field.INPUT]}
              showMaxButton={showMaxButton}
              currency={currencies[Field.INPUT] ?? null}
              onUserInput={handleTypeInput}
              onMax={handleMaxInput}
              fiatValue={showFiatValueInput ? fiatValueInput : undefined}
              onCurrencySelect={handleInputSelect}
              otherCurrency={currencies[Field.OUTPUT]}
              showCommonBases
              loading={independentField === Field.OUTPUT && routeIsSyncing}
              ref={inputCurrencyNumericalInputRef}
            />
          </SwapSection>
        </motion.div>
        
        <AnimatedSwapArrow
          onClick={() => {
            if (disableTokenInputs) return
            onSwitchTokens(inputTokenHasTax, formattedAmounts[dependentField])
          }}
          disabled={disableTokenInputs}
          color={theme.neutral1}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <OutputSwapSection>
            <SwapCurrencyInputPanel
              value={
                independentField === Field.INPUT && (routeIsSyncing || routeIsLoading)
                  ? '...'
                  : formattedAmounts[Field.OUTPUT]
              }
              disabled={disableTokenInputs}
              onUserInput={handleTypeOutput}
              label={<Trans>You receive</Trans>}
              showMaxButton={false}
              hideBalance={false}
              fiatValue={showFiatValueOutput ? fiatValueOutput : undefined}
              priceImpact={stablecoinPriceImpact}
              currency={currencies[Field.OUTPUT] ?? null}
              onCurrencySelect={handleOutputSelect}
              otherCurrency={currencies[Field.INPUT]}
              showCommonBases
              loading={independentField === Field.INPUT && (routeIsSyncing || routeIsLoading)}
              numericalInputSettings={{
                disabled: outputTokenHasTax,
                onDisabledClick: () => inputCurrencyNumericalInputRef.current?.focus(),
                disabledTooltipBody: <OutputTaxTooltipBody currencySymbol={currencies[Field.OUTPUT]?.symbol} />,
              }}
            />
            {recipient !== null && !showWrap ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <AutoRow justify="space-between" style={{ padding: '0 1rem' }}>
                  <ArrowWrapper clickable={false}>
                    <ArrowDown size="16" color={theme.neutral2} />
                  </ArrowWrapper>
                  <LinkStyledButton id="remove-recipient-button" onClick={() => onChangeRecipient(null)}>
                    <Trans>- Remove recipient</Trans>
                  </LinkStyledButton>
                </AutoRow>
                <AddressInputPanel id="recipient" value={recipient} onChange={onChangeRecipient} />
              </motion.div>
            ) : null}
          </OutputSwapSection>
        </motion.div>
      </div>
      
      <AutoColumn gap="xs">
        {showDetailsDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <AnimatedSwapDetailsDropdown
              trade={trade}
              syncing={routeIsSyncing}
              loading={routeIsLoading}
              allowedSlippage={allowedSlippage}
            />
          </motion.div>
        )}
        
        {showPriceImpactWarning && (
          <PriceImpactWarningAnimation>
            <PriceImpactWarning priceImpact={largerPriceImpact} />
          </PriceImpactWarningAnimation>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Swap Button Logic - Same as original, just styled differently */}
          {swapIsUnsupported ? (
            <StyledButtonPrimary disabled={true}>
              <ThemedText.DeprecatedMain mb="4px">
                <Trans>Unsupported asset</Trans>
              </ThemedText.DeprecatedMain>
            </StyledButtonPrimary>
          ) : switchingChain ? (
            <StyledButtonPrimary disabled={true}>
              <motion.div
                animate={{ 
                  opacity: [0.6, 1, 0.6], 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 
                }}
              >
                <Trans>Connecting to {getChainInfo(switchingChain)?.label}</Trans>
              </motion.div>
            </StyledButtonPrimary>
          ) : connectionReady && !account ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <StyledButtonPrimary onClick={toggleWalletDrawer} fontWeight={535}>
                <Trans>Connect wallet</Trans>
              </StyledButtonPrimary>
            </motion.div>
          ) : chainId && chainId !== connectedChainId ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <StyledButtonPrimary
                onClick={async () => {
                  try {
                    await switchChain(connector, chainId)
                  } catch (error) {
                    if (didUserReject(error)) {
                      // Ignore error, which keeps the user on the previous chain.
                    } else {
                      throw error
                    }
                  }
                }}
              >
                Connect to {getChainInfo(chainId)?.label}
              </StyledButtonPrimary>
            </motion.div>
          ) : showWrap ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <StyledButtonPrimary
                disabled={Boolean(wrapInputError)}
                onClick={handleOnWrap}
                fontWeight={535}
                data-testid="wrap-button"
              >
                {wrapInputError ? (
                  <WrapErrorText wrapInputError={wrapInputError} />
                ) : wrapType === WrapType.WRAP ? (
                  <Trans>Wrap</Trans>
                ) : wrapType === WrapType.UNWRAP ? (
                  <Trans>Unwrap</Trans>
                ) : null}
              </StyledButtonPrimary>
            </motion.div>
          ) : routeNotFound && userHasSpecifiedInputOutput && !routeIsLoading && !routeIsSyncing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GrayCard style={{ 
                textAlign: 'center',
                borderRadius: '16px',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '16px'
              }}>
                <ThemedText.DeprecatedMain mb="4px">
                  <Trans>Insufficient liquidity for this trade.</Trans>
                </ThemedText.DeprecatedMain>
              </GrayCard>
            </motion.div>
          ) : (
            <SwapButton
              onClick={() => {
                showPriceImpactWarning ? setShowPriceImpactModal(true) : handleContinueToReview()
              }}
              disabled={!getIsReviewableQuote(trade, tradeState, swapInputError)}
              swapInputError={swapInputError}
              routeIsSyncing={routeIsSyncing}
              routeIsLoading={routeIsLoading}
              priceImpactSeverity={priceImpactSeverity}
            />
          )}
        </motion.div>
      </AutoColumn>
    </SwapWrapper>
  </>
);
}

