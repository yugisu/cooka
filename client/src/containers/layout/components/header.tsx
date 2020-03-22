import React from 'react'
import styled from 'styled-components'

import { Logo } from 'components/logo'

const Container = styled.div`
  height: 3rem;
`

const Inner = styled.header`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: inherit;

  padding: 0 4rem;
  display: flex;
  align-items: center;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
`

export const Header = () => {
  return (
    <Container>
      <Inner>
        <Logo />
      </Inner>
    </Container>
  )
}

Header.Container = Container
