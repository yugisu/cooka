export const theme = {
  colors: {
    primary: '#EA526F',
    primaryLight: '#E76B74',
    secondary: '#D7AF70',
    white: '#fff',
    black: '#27201E',
    grey: '#707078',
    bg: '#F9F9F9',
  },
}

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
