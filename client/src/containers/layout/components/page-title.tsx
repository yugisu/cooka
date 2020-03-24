import React from 'react'
import styled from 'styled-components'

import { mobile } from 'utils/media.util'
import { usePageTitle } from 'utils/use-page-title.util'

const Container = styled.h1`
  margin-bottom: 3rem;

  font-size: 3rem;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.secondary};

  ${mobile.css`
    margin-bottom: 2rem;
  `}
`

type Props = {
  children: string
}

export const PageTitle = ({ children }: Props) => {
  usePageTitle(`cookit | ${children}`)

  return <Container>{children}</Container>
}

PageTitle.Container = Container
