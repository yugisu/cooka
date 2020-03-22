import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Layout } from 'containers/layout'
import { RecipeList } from 'containers/recipe-list'

export const Main = () => {
  const recipeState = useSelector(state => state.recipes)

  const recipes = useMemo(() => recipeState.keys.map(key => recipeState.items[key]), [
    recipeState.items,
    recipeState.keys,
  ])

  return (
    <Layout title="All recipes">
      <RecipeList items={recipes} loading={recipeState.loading} />
    </Layout>
  )
}
