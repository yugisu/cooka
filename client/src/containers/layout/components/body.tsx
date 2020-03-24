import React from 'react'
import styled from 'styled-components'

import { desktop, mobile } from 'utils/media.util'

const Container = styled.div`
  padding: 3rem 4rem 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile.css`
    padding: 2rem 1rem 4rem;
  `}
`

const Inner = styled.div`
  width: 100%;

  ${desktop.css`
      width: 44rem;
  `}
`
type Props = {
  children?: React.ReactNode
}

export const Body = ({ children }: Props) => {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  )
}

Body.Container = Container
