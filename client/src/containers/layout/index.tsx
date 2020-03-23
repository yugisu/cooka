import React from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Body } from './components/body'

const Container = styled.div``

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
    </Container>
  )
}

Layout.Container = Container
Layout.Header = Header
Layout.Body = Body

export * from './components/page-title'
