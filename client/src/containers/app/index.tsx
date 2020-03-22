import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'

import { store } from 'store'
import { theme } from 'configs/theme.config'

import { GlobalStyles } from 'styles/global.style'
import { Layout } from 'containers/layout'

export const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Layout />
      </ThemeProvider>
    </StoreProvider>
  )
}
