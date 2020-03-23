import { RecipeType } from 'types/recipe.type'

export const RECIPES_FETCH_INIT = 'RECIPES_FETCH_INIT'
export const RECIPES_FETCH_SUCCESS = 'RECIPES_FETCH_SUCCESS'
export const RECIPES_FETCH_FAILURE = 'RECIPES_FETCH_FAILURE'

export const RECIPES_ADD_RECIPE = 'RECIPES_ADD_RECIPE'

type RecipesFetchInit = {
  type: typeof RECIPES_FETCH_INIT
}

type RecipesFetchSuccess = {
  type: typeof RECIPES_FETCH_SUCCESS
  payload: RecipeType[]
}

type RecipesFetchFailure = {
  type: typeof RECIPES_FETCH_FAILURE
  payload: string
}

type RecipesAddRecipe = {
  type: typeof RECIPES_ADD_RECIPE
  payload: RecipeType
}

export type RecipeAction =
  | RecipesFetchInit
  | RecipesFetchSuccess
  | RecipesFetchFailure
  | RecipesAddRecipe
