import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'

import { store } from 'store'
import { theme } from 'configs/theme.config'

import { Layout } from 'containers/layout'
import { Routes } from 'containers/routes'
import { GlobalStyles } from 'styles/global.style'

export const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  )
}
