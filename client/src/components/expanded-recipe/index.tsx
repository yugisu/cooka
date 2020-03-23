import React from 'react'
import { format } from 'date-fns'

import { RecipeType } from 'types/recipe.type'

import * as Styled from './styled'

type Props = {
  recipe: RecipeType
}

export const ExpandedRecipe = ({ recipe }: Props) => {
  return (
    <Styled.Container>
      {recipe.image && <Styled.Image src={recipe.image} />}

      <Styled.Content>
        <Styled.Title>{recipe.title}</Styled.Title>

        <Styled.DateMark>{format(new Date(recipe.createdAt), 'dd LLL yyyy')}</Styled.DateMark>

        <Styled.Description>{recipe.description}</Styled.Description>

        <Styled.Body>{recipe.body}</Styled.Body>
      </Styled.Content>
    </Styled.Container>
  )
}

ExpandedRecipe.Container = Styled.Container

export { ExpandedRecipePlaceholder } from './placeholder'
