import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'configs/theme'

import { GlobalStyles } from 'styles/global'
import { Layout } from 'containers/layout'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout />
    </ThemeProvider>
  )
}
