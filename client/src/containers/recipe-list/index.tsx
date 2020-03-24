import React from 'react'
import styled from 'styled-components'

import { mobile } from 'utils/media.util'
import { RecipeType } from 'types/recipe.type'

import { Recipe, RecipePlaceholder } from 'components/recipe'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 3rem;

    ${mobile.css`
      margin-top: 2rem;
    `}
  }
`

type Props = {
  items: RecipeType[]
  loading?: boolean
}

export const RecipeList = ({ items, loading = false }: Props) => {
  return (
    <Container>
      {items.length
        ? items.map(recipe => <Recipe recipe={recipe} key={`recipe-${recipe.id}`} />)
        : !loading && <div>No recipes yet :(</div>}
      {loading &&
        Array(items.length ? 1 : 3)
          .fill(null)
          .map((_, idx) => <RecipePlaceholder key={`holder-${idx}`} />)}
    </Container>
  )
}
