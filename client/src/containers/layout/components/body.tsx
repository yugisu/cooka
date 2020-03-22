import React from 'react'
import styled from 'styled-components'

import { desktop } from 'utils/media.util'

const Container = styled.div`
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Inner = styled.div`
  ${desktop.css`
      width: 700px;
  `}
`

const Title = styled.h1`
  margin: 1rem 0 3rem;

  font-size: 3rem;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.secondary};
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
Body.Title = Title
