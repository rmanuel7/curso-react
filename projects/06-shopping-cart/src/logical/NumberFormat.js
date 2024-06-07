// Create our number formatter.
export const FCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
})
