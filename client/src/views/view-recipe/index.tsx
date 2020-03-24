import React, { useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { tablet } from 'utils/media.util'
import { ROUTES } from 'configs/routes.config'
import { addRecipe } from 'store/recipes/actions'
import { recipeService } from 'services/recipe.service'

import { ExpandedRecipe, ExpandedRecipePlaceholder } from 'components/expanded-recipe'

const Container = styled.div`
  padding-top: 2rem;

  ${tablet.css`
    padding-top: 0;
  `}
`

export const ViewRecipe = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()

  const recipeId = Number(id)
  const recipe = useSelector(state => (isNaN(recipeId) ? null : state.recipes.items[recipeId]))

  const redirectToMain = useCallback(() => history.replace(ROUTES.MAIN), [history])

  useEffect(() => {
    if (id && recipeId && String(recipeId) !== id) {
      history.replace(history.location.pathname.replace(id, String(recipeId)))
    }
  }, [history, id, recipeId])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (recipeId !== null) {
      recipeService
        .getOne(recipeId)
        .then(recipe => (recipe ? dispatch(addRecipe(recipe)) : redirectToMain()))
        .catch(console.error)
    } else {
      redirectToMain()
    }
  }, [dispatch, recipeId, redirectToMain])

  return (
    <Container>
      {recipe ? <ExpandedRecipe recipe={recipe} /> : <ExpandedRecipePlaceholder />}
    </Container>
  )
}
