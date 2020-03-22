import React from 'react'
import styled from 'styled-components'

import { Logo } from 'components/logo'

const Container = styled.header`
  height: 3rem;

  padding: 0 4rem;
  display: flex;
  align-items: center;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
`

export const Header = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

Header.Container = Container
