import { Currency } from '@synthra-swap/sdk-core'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'UOMI'
  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}
