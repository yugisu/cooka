import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Link } from 'react-router-dom'

import { ROUTES } from 'configs/routes.config'

const Container = styled(Link)`
  width: 4.6rem;

  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Fredoka One', cursive;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.secondary};
  color: inherit;

  span {
    width: 0.5rem;

    display: flex;
    justify-content: flex-end;
    padding-right: 0.2rem;

    line-height: 1.5rem;
    background: ${props => lighten(0.2, props.theme.colors.primaryLight)};
    border-radius: 2px;
    transition: width 0.25s;
  }

  &:hover span {
    width: 2rem;
  }

  &:active span,
  &:focus span {
    width: 3rem;
  }
`

export const Logo = () => {
  return (
    <Container to={ROUTES.MAIN}>
      <span>cookit</span>
    </Container>
  )
}

Logo.Container = Container
