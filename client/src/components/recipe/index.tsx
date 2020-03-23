import React from 'react'
import { format } from 'date-fns'

import { RecipeType } from 'types/recipe.type'

import { ROUTES } from 'configs/routes.config'

import * as Styled from './styled'

type Props = {
  recipe: RecipeType
}

export const Recipe = ({ recipe }: Props) => {
  return (
    <Styled.LinkContainer to={ROUTES.VIEW_RECIPE.replace(':id', String(recipe.id))}>
      <Styled.Container>
        {recipe.image && <Styled.Image src={recipe.image} />}

        <Styled.Content>
          <Styled.DateMark>{format(new Date(recipe.createdAt), 'dd LLL yyyy')}</Styled.DateMark>

          <Styled.Title>{recipe.title}</Styled.Title>

          <Styled.Description>{recipe.description}</Styled.Description>
        </Styled.Content>
      </Styled.Container>
    </Styled.LinkContainer>
  )
}

Recipe.Container = Styled.Container

export { RecipePlaceholder } from './placeholder'
