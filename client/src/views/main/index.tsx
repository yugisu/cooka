import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { PageTitle } from 'containers/layout'
import { RecipeList } from 'containers/recipe-list'

export const Main = () => {
  const recipeState = useSelector(state => state.recipes)

  const recipes = useMemo(() => recipeState.keys.map(key => recipeState.items[key]), [
    recipeState.items,
    recipeState.keys,
  ])

  return (
    <>
      <PageTitle>All recipes</PageTitle>

      <RecipeList items={recipes} loading={recipeState.loading} />
    </>
  )
}
