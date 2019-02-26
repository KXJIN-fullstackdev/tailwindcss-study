export default function({ variants }) {
  return function({ addUtilities }) {
    addUtilities(
      {
        '.flex-shrink': {
          'flex-shrink': '1',
        },
        '.flex-shrink-0': {
          'flex-shrink': '0',
        },
      },
      variants
    )
  }
}
