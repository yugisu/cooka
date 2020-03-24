import { recipeService } from 'services/recipe.service'
import { RecipeType } from 'types/recipe.type'
import { Thunky } from 'store/types'

import {
  RECIPES_FETCH_INIT,
  RECIPES_FETCH_SUCCESS,
  RECIPES_FETCH_FAILURE,
  RECIPES_ADD_RECIPE,
  RecipeAction,
} from './types'

const fetchRecipesInit = (): RecipeAction => ({
  type: RECIPES_FETCH_INIT,
})

const fetchRecipesSuccess = (payload: RecipeType[]): RecipeAction => ({
  type: RECIPES_FETCH_SUCCESS,
  payload,
})

const fetchRecipesFailure = (payload: string): RecipeAction => ({
  type: RECIPES_FETCH_FAILURE,
  payload,
})

export const addRecipe = (payload: RecipeType): RecipeAction => ({
  type: RECIPES_ADD_RECIPE,
  payload,
})

export const fetchRecipes = (): Thunky => async dispatch => {
  dispatch(fetchRecipesInit())

  try {
    const recipes = await recipeService.getAll()

    dispatch(fetchRecipesSuccess(recipes))
  } catch (error) {
    dispatch(fetchRecipesFailure(error.message))
  }
}
