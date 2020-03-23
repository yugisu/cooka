import React from 'react'
import styled from 'styled-components'

import { desktop } from 'utils/media.util'

const Container = styled.div`
  padding: 2rem 4rem 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Inner = styled.div`
  ${desktop.css`
      width: 700px;
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
