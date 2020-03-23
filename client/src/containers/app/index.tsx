import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { initializeApp } from 'store/actions'
import { theme } from 'configs/theme.config'

import { Layout } from 'containers/layout'
import { Routes } from 'containers/routes'
import { GlobalStyles } from 'styles/global.style'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => void dispatch(initializeApp()), [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  )
}
