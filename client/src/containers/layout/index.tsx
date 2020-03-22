import React from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Body } from './components/body'

const Container = styled.div``

type Props = {
  title?: string
  children?: React.ReactNode
}

export const Layout = ({ title, children }: Props) => {
  return (
    <Container>
      <Header />
      <Body>
        {title && <Body.Title>{title}</Body.Title>}

        {children}
      </Body>
    </Container>
  )
}

Layout.Container = Container
Layout.Header = Header
Layout.Body = Body
