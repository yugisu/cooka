import { RecipeType } from 'types/recipe.type'
import { Thunky } from 'store/types'

import {
  RECIPES_FETCH_INIT,
  RECIPES_FETCH_SUCCESS,
  RECIPES_FETCH_FAILURE,
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

export const fetchRecipes = (): Thunky => async dispatch => {}
