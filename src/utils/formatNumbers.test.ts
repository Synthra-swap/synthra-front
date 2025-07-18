import { renderHook } from '@testing-library/react'
import { CurrencyAmount, Percent } from '@synthra-swap/sdk-core'
import { USDC_MAINNET } from 'constants/tokens'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { mocked } from 'test-utils/mocked'

import { NumberType, useFormatter } from './formatNumbers'

jest.mock('hooks/useActiveLocale')
jest.mock('hooks/useActiveLocalCurrency')

describe('formatNumber', () => {
  it('formats token reference numbers correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567000000000, type: NumberType.TokenNonTx })).toBe('>999T')
    expect(formatNumber({ input: 1002345, type: NumberType.TokenNonTx })).toBe('1.00M')
    expect(formatNumber({ input: 1234, type: NumberType.TokenNonTx })).toBe('1,234.00')
    expect(formatNumber({ input: 0.00909, type: NumberType.TokenNonTx })).toBe('0.009')
    expect(formatNumber({ input: 0.09001, type: NumberType.TokenNonTx })).toBe('0.090')
    expect(formatNumber({ input: 0.00099, type: NumberType.TokenNonTx })).toBe('<0.001')
    expect(formatNumber({ input: 0, type: NumberType.TokenNonTx })).toBe('0')
  })

  it('formats token reference numbers correctly with deutsch locale', () => {
    mocked(useActiveLocale).mockReturnValue('de-DE')
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567000000000, type: NumberType.TokenNonTx })).toBe('>999\xa0Bio.')
    expect(formatNumber({ input: 1002345, type: NumberType.TokenNonTx })).toBe('1,00\xa0Mio.')
    expect(formatNumber({ input: 1234, type: NumberType.TokenNonTx })).toBe('1.234,00')
    expect(formatNumber({ input: 0.00909, type: NumberType.TokenNonTx })).toBe('0,009')
    expect(formatNumber({ input: 0.09001, type: NumberType.TokenNonTx })).toBe('0,090')
    expect(formatNumber({ input: 0.00099, type: NumberType.TokenNonTx })).toBe('<0,001')
    expect(formatNumber({ input: 0, type: NumberType.TokenNonTx })).toBe('0')
  })

  it('formats token transaction numbers correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.8901, type: NumberType.TokenTx })).toBe('1,234,567.89')
    expect(formatNumber({ input: 765432.1, type: NumberType.TokenTx })).toBe('765,432.10')

    expect(formatNumber({ input: 7654.321, type: NumberType.TokenTx })).toBe('7,654.32')
    expect(formatNumber({ input: 765.4321, type: NumberType.TokenTx })).toBe('765.432')
    expect(formatNumber({ input: 76.54321, type: NumberType.TokenTx })).toBe('76.5432')
    expect(formatNumber({ input: 7.654321, type: NumberType.TokenTx })).toBe('7.65432')
    expect(formatNumber({ input: 7.60000054321, type: NumberType.TokenTx })).toBe('7.60')
    expect(formatNumber({ input: 7.6, type: NumberType.TokenTx })).toBe('7.60')
    expect(formatNumber({ input: 7, type: NumberType.TokenTx })).toBe('7.00')

    expect(formatNumber({ input: 0.987654321, type: NumberType.TokenTx })).toBe('0.98765')
    expect(formatNumber({ input: 0.9, type: NumberType.TokenTx })).toBe('0.90')
    expect(formatNumber({ input: 0.901000123, type: NumberType.TokenTx })).toBe('0.901')
    expect(formatNumber({ input: 0.000000001, type: NumberType.TokenTx })).toBe('<0.00001')
    expect(formatNumber({ input: 0, type: NumberType.TokenTx })).toBe('0')
  })

  it('formats token transaction numbers correctly with russian locale', () => {
    mocked(useActiveLocale).mockReturnValue('ru-RU')
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.8901, type: NumberType.TokenTx })).toBe('1\xa0234\xa0567,89')
    expect(formatNumber({ input: 765432.1, type: NumberType.TokenTx })).toBe('765\xa0432,10')

    expect(formatNumber({ input: 7654.321, type: NumberType.TokenTx })).toBe('7\xa0654,32')
    expect(formatNumber({ input: 765.4321, type: NumberType.TokenTx })).toBe('765,432')
    expect(formatNumber({ input: 76.54321, type: NumberType.TokenTx })).toBe('76,5432')
    expect(formatNumber({ input: 7.654321, type: NumberType.TokenTx })).toBe('7,65432')
    expect(formatNumber({ input: 7.60000054321, type: NumberType.TokenTx })).toBe('7,60')
    expect(formatNumber({ input: 7.6, type: NumberType.TokenTx })).toBe('7,60')
    expect(formatNumber({ input: 7, type: NumberType.TokenTx })).toBe('7,00')

    expect(formatNumber({ input: 0.987654321, type: NumberType.TokenTx })).toBe('0,98765')
    expect(formatNumber({ input: 0.9, type: NumberType.TokenTx })).toBe('0,90')
    expect(formatNumber({ input: 0.901000123, type: NumberType.TokenTx })).toBe('0,901')
    expect(formatNumber({ input: 0.000000001, type: NumberType.TokenTx })).toBe('<0,00001')
    expect(formatNumber({ input: 0, type: NumberType.TokenTx })).toBe('0')
  })

  it('formats fiat estimates on token details pages correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.891, type: NumberType.FiatTokenDetails })).toBe('1.23M USDC')
    expect(formatNumber({ input: 1234.5678, type: NumberType.FiatTokenDetails })).toBe('1,234.57 USDC')
    expect(formatNumber({ input: 1.048942, type: NumberType.FiatTokenDetails })).toBe('1.049 USDC')

    expect(formatNumber({ input: 0.001231, type: NumberType.FiatTokenDetails })).toBe('0.00123 USDC')
    expect(formatNumber({ input: 0.00001231, type: NumberType.FiatTokenDetails })).toBe('0.0000123 USDC')

    expect(formatNumber({ input: 0.0000001234, type: NumberType.FiatTokenDetails })).toBe('0.000000123 USDC')
    expect(formatNumber({ input: 0.000000009876, type: NumberType.FiatTokenDetails })).toBe('<0.00000001 USDC')
  })

  it('formats fiat estimates for tokens correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.891, type: NumberType.FiatTokenPrice })).toBe('1.23M USDC')
    expect(formatNumber({ input: 1234.5678, type: NumberType.FiatTokenPrice })).toBe('1,234.57 USDC')

    expect(formatNumber({ input: 0.010235, type: NumberType.FiatTokenPrice })).toBe('0.0102 USDC')
    expect(formatNumber({ input: 0.001231, type: NumberType.FiatTokenPrice })).toBe('0.00123 USDC')
    expect(formatNumber({ input: 0.00001231, type: NumberType.FiatTokenPrice })).toBe('0.0000123 USDC')

    expect(formatNumber({ input: 0.0000001234, type: NumberType.FiatTokenPrice })).toBe('0.000000123 USDC')
    expect(formatNumber({ input: 0.000000009876, type: NumberType.FiatTokenPrice })).toBe('<0.00000001 USDC')
    expect(formatNumber({ input: 10000000000000000000000000000000, type: NumberType.FiatTokenPrice })).toBe(
      '1.000000E31 USDC'
    )
  })

  it('formats fiat estimates for token stats correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234576, type: NumberType.FiatTokenStats })).toBe('1.2M USDC')
    expect(formatNumber({ input: 234567, type: NumberType.FiatTokenStats })).toBe('234.6K USDC')
    expect(formatNumber({ input: 123.456, type: NumberType.FiatTokenStats })).toBe('123.46 USDC')
    expect(formatNumber({ input: 1.23, type: NumberType.FiatTokenStats })).toBe('1.23 USDC')
    expect(formatNumber({ input: 0.123, type: NumberType.FiatTokenStats })).toBe('0.12 USDC')
    expect(formatNumber({ input: 0.00123, type: NumberType.FiatTokenStats })).toBe('<0.01 USDC')
    expect(formatNumber({ input: 0, type: NumberType.FiatTokenStats })).toBe('-')
  })

  it('formats gas USD prices correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.891, type: NumberType.FiatGasPrice })).toBe('1.23M USDC')
    expect(formatNumber({ input: 18.448, type: NumberType.FiatGasPrice })).toBe('18.45 USDC')
    expect(formatNumber({ input: 0.0099, type: NumberType.FiatGasPrice })).toBe('<0.01 USDC')
    expect(formatNumber({ input: 0, type: NumberType.FiatGasPrice })).toBe('0.00 USDC')
  })

  it('formats USD token quantities prices correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.891, type: NumberType.FiatTokenQuantity })).toBe('1.23M USDC')
    expect(formatNumber({ input: 18.448, type: NumberType.FiatTokenQuantity })).toBe('18.45 USDC')
    expect(formatNumber({ input: 0.0099, type: NumberType.FiatTokenQuantity })).toBe('<0.01 USDC')
    expect(formatNumber({ input: 0, type: NumberType.FiatTokenQuantity })).toBe('0.00 USDC')
  })

  it('formats Swap text input/output numbers correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.8901, type: NumberType.SwapTradeAmount })).toBe('1234570')
    expect(formatNumber({ input: 765432.1, type: NumberType.SwapTradeAmount })).toBe('765432')

    expect(formatNumber({ input: 7654.321, type: NumberType.SwapTradeAmount })).toBe('7654.32')
    expect(formatNumber({ input: 765.4321, type: NumberType.SwapTradeAmount })).toBe('765.432')
    expect(formatNumber({ input: 76.54321, type: NumberType.SwapTradeAmount })).toBe('76.5432')
    expect(formatNumber({ input: 7.654321, type: NumberType.SwapTradeAmount })).toBe('7.65432')
    expect(formatNumber({ input: 7.60000054321, type: NumberType.SwapTradeAmount })).toBe('7.60')
    expect(formatNumber({ input: 7.6, type: NumberType.SwapTradeAmount })).toBe('7.60')
    expect(formatNumber({ input: 7, type: NumberType.SwapTradeAmount })).toBe('7.00')

    expect(formatNumber({ input: 0.987654321, type: NumberType.SwapTradeAmount })).toBe('0.98765')
    expect(formatNumber({ input: 0.9, type: NumberType.SwapTradeAmount })).toBe('0.90')
    expect(formatNumber({ input: 0.901000123, type: NumberType.SwapTradeAmount })).toBe('0.901')
    expect(formatNumber({ input: 0.000000001, type: NumberType.SwapTradeAmount })).toBe('0.000000001')
    expect(formatNumber({ input: 0, type: NumberType.SwapTradeAmount })).toBe('0')
  })

  it('formats Swap text input/output numbers correctly with Korean locale', () => {
    mocked(useActiveLocale).mockReturnValue('ko-KR')
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567.8901, type: NumberType.SwapTradeAmount })).toBe('1234570')
    expect(formatNumber({ input: 765432.1, type: NumberType.SwapTradeAmount })).toBe('765432')

    expect(formatNumber({ input: 7654.321, type: NumberType.SwapTradeAmount })).toBe('7654.32')
    expect(formatNumber({ input: 765.4321, type: NumberType.SwapTradeAmount })).toBe('765.432')
    expect(formatNumber({ input: 76.54321, type: NumberType.SwapTradeAmount })).toBe('76.5432')
    expect(formatNumber({ input: 7.654321, type: NumberType.SwapTradeAmount })).toBe('7.65432')
    expect(formatNumber({ input: 7.60000054321, type: NumberType.SwapTradeAmount })).toBe('7.60')
    expect(formatNumber({ input: 7.6, type: NumberType.SwapTradeAmount })).toBe('7.60')
    expect(formatNumber({ input: 7, type: NumberType.SwapTradeAmount })).toBe('7.00')

    expect(formatNumber({ input: 0.987654321, type: NumberType.SwapTradeAmount })).toBe('0.98765')
    expect(formatNumber({ input: 0.9, type: NumberType.SwapTradeAmount })).toBe('0.90')
    expect(formatNumber({ input: 0.901000123, type: NumberType.SwapTradeAmount })).toBe('0.901')
    expect(formatNumber({ input: 0.000000001, type: NumberType.SwapTradeAmount })).toBe('0.000000001')
    expect(formatNumber({ input: 0, type: NumberType.SwapTradeAmount })).toBe('0')
  })

  it('formats NFT numbers correctly', () => {
    const { formatNumber } = renderHook(() => useFormatter()).result.current

    expect(formatNumber({ input: 1234567000000000, type: NumberType.NFTTokenFloorPrice })).toBe('>999T')
    expect(formatNumber({ input: 1002345, type: NumberType.NFTTokenFloorPrice })).toBe('1M')
    expect(formatNumber({ input: 1234, type: NumberType.NFTTokenFloorPrice })).toBe('1.23K')
    expect(formatNumber({ input: 12.34467, type: NumberType.NFTTokenFloorPrice })).toBe('12.34')
    expect(formatNumber({ input: 12.1, type: NumberType.NFTTokenFloorPrice })).toBe('12.1')
    expect(formatNumber({ input: 0.00909, type: NumberType.NFTTokenFloorPrice })).toBe('0.009')
    expect(formatNumber({ input: 0.09001, type: NumberType.NFTTokenFloorPrice })).toBe('0.09')
    expect(formatNumber({ input: 0.00099, type: NumberType.NFTTokenFloorPrice })).toBe('<0.001')
    expect(formatNumber({ input: 0, type: NumberType.NFTTokenFloorPrice })).toBe('0')

    expect(formatNumber({ input: 12.1, type: NumberType.NFTTokenFloorPriceTrailingZeros })).toBe('12.10')
    expect(formatNumber({ input: 0.09001, type: NumberType.NFTTokenFloorPriceTrailingZeros })).toBe('0.090')

    expect(formatNumber({ input: 0.987654321, type: NumberType.NFTCollectionStats })).toBe('1')
    expect(formatNumber({ input: 0.9, type: NumberType.NFTCollectionStats })).toBe('1')
    expect(formatNumber({ input: 76543.21, type: NumberType.NFTCollectionStats })).toBe('76.5K')
    expect(formatNumber({ input: 7.60000054321, type: NumberType.NFTCollectionStats })).toBe('8')
    expect(formatNumber({ input: 1234567890, type: NumberType.NFTCollectionStats })).toBe('1.2B')
    expect(formatNumber({ input: 1234567000000000, type: NumberType.NFTCollectionStats })).toBe('1234.6T')
  })
})

describe('formatUSDPrice', () => {
  it('format fiat price correctly', () => {
    const { formatFiatPrice } = renderHook(() => useFormatter()).result.current

    expect(formatFiatPrice({ price: 0.000000009876 })).toBe('<0.00000001 USDC')
    expect(formatFiatPrice({ price: 0.00001231 })).toBe('0.0000123 USDC')
    expect(formatFiatPrice({ price: 0.001231 })).toBe('0.00123 USDC')
    expect(formatFiatPrice({ price: 0.0 })).toBe('0.00 USDC')
    expect(formatFiatPrice({ price: 0 })).toBe('0.00 USDC')
    expect(formatFiatPrice({ price: 1.048942 })).toBe('1.05 USDC')
    expect(formatFiatPrice({ price: 0.10235 })).toBe('0.102 USDC')
    expect(formatFiatPrice({ price: 1_234.5678 })).toBe('1,234.57 USDC')
    expect(formatFiatPrice({ price: 1_234_567.891 })).toBe('1.23M USDC')
    expect(formatFiatPrice({ price: 1_000_000_000_000 })).toBe('1.00T USDC')
    expect(formatFiatPrice({ price: 1_000_000_000_000_000 })).toBe('1000.00T USDC')
  })
})

describe('formatPriceImpact', () => {
  it('should correctly format undefined', () => {
    const { formatPriceImpact } = renderHook(() => useFormatter()).result.current

    expect(formatPriceImpact(undefined)).toBe('-')
  })

  it('correctly formats a percent with 3 significant digits', () => {
    const { formatPriceImpact } = renderHook(() => useFormatter()).result.current

    expect(formatPriceImpact(new Percent(-1, 100000))).toBe('0.001%')
    expect(formatPriceImpact(new Percent(-1, 1000))).toBe('0.100%')
    expect(formatPriceImpact(new Percent(-1, 100))).toBe('1.000%')
    expect(formatPriceImpact(new Percent(-1, 10))).toBe('10.000%')
    expect(formatPriceImpact(new Percent(-1, 1))).toBe('100.000%')
  })

  it('correctly formats a percent with 3 significant digits with french locale', () => {
    mocked(useActiveLocale).mockReturnValue('fr-FR')
    const { formatPriceImpact } = renderHook(() => useFormatter()).result.current

    expect(formatPriceImpact(new Percent(-1, 100000))).toBe('0,001%')
    expect(formatPriceImpact(new Percent(-1, 1000))).toBe('0,100%')
    expect(formatPriceImpact(new Percent(-1, 100))).toBe('1,000%')
    expect(formatPriceImpact(new Percent(-1, 10))).toBe('10,000%')
    expect(formatPriceImpact(new Percent(-1, 1))).toBe('100,000%')
  })
})

describe('formatSlippage', () => {
  it('should correctly format undefined', () => {
    const { formatSlippage } = renderHook(() => useFormatter()).result.current

    expect(formatSlippage(undefined)).toBe('-')
  })

  it('correctly formats a percent with no trailing digits', () => {
    const { formatSlippage } = renderHook(() => useFormatter()).result.current

    expect(formatSlippage(new Percent(1, 100000))).toBe('0.001%')
    expect(formatSlippage(new Percent(1, 1000))).toBe('0.1%')
    expect(formatSlippage(new Percent(1, 100))).toBe('1%')
    expect(formatSlippage(new Percent(1, 10))).toBe('10%')
    expect(formatSlippage(new Percent(1, 1))).toBe('100%')
  })

  it('correctly formats a percent with french locale', () => {
    mocked(useActiveLocale).mockReturnValue('fr-FR')
    const { formatSlippage } = renderHook(() => useFormatter()).result.current

    expect(formatSlippage(new Percent(1, 100000))).toBe('0,001%')
    expect(formatSlippage(new Percent(1, 1000))).toBe('0,1%')
    expect(formatSlippage(new Percent(1, 100))).toBe('1%')
    expect(formatSlippage(new Percent(1, 10))).toBe('10%')
    expect(formatSlippage(new Percent(1, 1))).toBe('100%')
  })
})

describe('formatReviewSwapCurrencyAmount', () => {
  it('should use TokenTx formatting under a default length', () => {
    const { formatReviewSwapCurrencyAmount } = renderHook(() => useFormatter()).result.current

    const currencyAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '2000000000') // 2,000 USDC
    expect(formatReviewSwapCurrencyAmount(currencyAmount)).toBe('2,000')
  })

  it('should use TokenTx formatting under a default length with french locales', () => {
    mocked(useActiveLocale).mockReturnValue('fr-FR')
    const { formatReviewSwapCurrencyAmount } = renderHook(() => useFormatter()).result.current

    const currencyAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '2000000000') // 2,000 USDC
    expect(formatReviewSwapCurrencyAmount(currencyAmount)).toBe('2\u202f000')
  })

  it('should use SwapTradeAmount formatting over the default length', () => {
    const { formatReviewSwapCurrencyAmount } = renderHook(() => useFormatter()).result.current

    const currencyAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '2000000000000') // 2,000,000 USDC
    expect(formatReviewSwapCurrencyAmount(currencyAmount)).toBe('2000000')
  })

  it('should use SwapTradeAmount formatting over the default length with french locales', () => {
    mocked(useActiveLocale).mockReturnValue('fr-FR')
    const { formatReviewSwapCurrencyAmount } = renderHook(() => useFormatter()).result.current

    const currencyAmount = CurrencyAmount.fromRawAmount(USDC_MAINNET, '2000000000000') // 2,000,000 USDC
    expect(formatReviewSwapCurrencyAmount(currencyAmount)).toBe('2000000')
  })
})

describe('formatPercent', () => {
  it.each([[null], [undefined], [Infinity], [NaN]])('should correctly format %p', (value) => {
    const { formatPercent } = renderHook(() => useFormatter()).result.current

    expect(formatPercent(value)).toBe('-')
  })

  it('correctly formats a percent with 2 decimal places', () => {
    const { formatPercent } = renderHook(() => useFormatter()).result.current

    expect(formatPercent(0)).toBe('0.00%')
    expect(formatPercent(0.1)).toBe('0.10%')
    expect(formatPercent(1)).toBe('1.00%')
    expect(formatPercent(10)).toBe('10.00%')
    expect(formatPercent(100)).toBe('100.00%')
  })

  it('correctly formats a percent with 2 decimal places in french locale', () => {
    mocked(useActiveLocale).mockReturnValue('fr-FR')
    const { formatPercent } = renderHook(() => useFormatter()).result.current

    expect(formatPercent(0)).toBe('0,00%')
    expect(formatPercent(0.1)).toBe('0,10%')
    expect(formatPercent(1)).toBe('1,00%')
    expect(formatPercent(10)).toBe('10,00%')
    expect(formatPercent(100)).toBe('100,00%')
  })
})
