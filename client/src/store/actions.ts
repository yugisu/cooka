import { Thunky } from './types'
import { fetchRecipes } from './recipes/actions'

export const initializeApp = (): Thunky => dispatch => {
  dispatch(fetchRecipes())
}
