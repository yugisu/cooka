import React from 'react'
import styled from 'styled-components'

import { RecipeType } from 'types/recipe.type'

import { Recipe } from 'components/recipe'
import { RecipePlaceholder } from 'components/recipe-placeholder'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > ${Recipe.Container} {
    &:not(:first-child) {
      margin-top: 4rem;
    }
  }
`

type Props = {
  items: RecipeType[]
  loading?: boolean
}

export const RecipeList = ({ items, loading = false }: Props) => {
  if (loading) {
    return (
      <Container>
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <RecipePlaceholder key={`holder-${idx}`} />
          ))}
      </Container>
    )
  }

  return (
    <Container>
      {items.length ? (
        items.map(recipe => <Recipe recipe={recipe} key={`recipe-${recipe.id}`} />)
      ) : (
        <div>No recipes yet :(</div>
      )}
    </Container>
  )
}
