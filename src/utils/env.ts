export function isTestEnv(): boolean {
  return false //process.env.NODE_ENV === 'test'
}

export function isStagingEnv(): boolean {
  // This is set in vercel builds and deploys from releases/staging.
  return false //Boolean(process.env.REACT_APP_STAGING)
}

export function isProductionEnv(): boolean {
  return true //process.env.NODE_ENV === 'production' && !isStagingEnv()
}
