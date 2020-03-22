import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'configs/theme'
import { GlobalStyles } from 'styles/global'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div>Hello to all the cooks in the world!</div>
    </ThemeProvider>
  )
}
