import React from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Main } from './components/main'

const Container = styled.div``

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  )
}
