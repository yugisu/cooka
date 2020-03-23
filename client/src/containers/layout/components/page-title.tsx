import React from 'react'
import styled from 'styled-components'
import { usePageTitle } from 'utils/use-page-title.util'

const Container = styled.h1`
  margin: 1rem 0 3rem;

  font-size: 3rem;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.secondary};
`

type Props = {
  children: string
}

export const PageTitle = ({ children }: Props) => {
  usePageTitle(`cookit | ${children}`)

  return <Container>{children}</Container>
}

PageTitle.Container = Container
