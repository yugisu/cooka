import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { RecipeType } from 'types/recipe.type'

const DEFAULT_IMAGE_PLACEHOLDER =
  'http://cartercookbook.com/wp-content/themes/fairgame/assets/images/placeholder@2x.png'

const Container = styled.article`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 0.35rem;

  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary}, 0 4px 4px rgba(0, 0, 0, 0.1),
      0 12px 16px rgba(0, 0, 0, 0.1), 0 32px 64px rgba(0, 0, 0, 0.07);
  }
`

const Image = styled.img`
  display: block;
  height: 16rem;
  width: 100%;
  object-fit: cover;

  border-radius: 0.35rem 0.35rem 0 0;
  user-select: none;
`

const Content = styled.div`
  position: relative;

  padding: 2rem 1rem 2.5rem;
`

const DateMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(10%, -50%);

  padding: 0.25rem 0.5rem;

  color: ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.white};

  border-radius: 0.35rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`

const Title = styled.h3`
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.5rem;
  font-weight: normal;
`

const Description = styled.p`
  margin-top: 1.5rem;
`

type Props = {
  recipe: RecipeType
}

export const Recipe = ({ recipe }: Props) => {
  return (
    <Container>
      <Image src={recipe.image || DEFAULT_IMAGE_PLACEHOLDER} />
      <Content>
        <DateMark>{format(new Date(recipe.createdAt), 'dd LLL yyyy')}</DateMark>
        <Title>{recipe.title}</Title>
        <Description>{recipe.description}</Description>
      </Content>
    </Container>
  )
}

Recipe.Container = Container
Recipe.Image = Image
Recipe.Content = Content
Recipe.Title = Title
Recipe.Description = Description
