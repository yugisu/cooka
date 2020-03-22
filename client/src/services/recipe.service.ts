import { api } from 'utils/api.util'
import { RecipeDataType } from 'types/recipe.type'

const getAll = () => api.get('/recipes')

const create = (recipe: RecipeDataType) => api.post('/recipes', recipe)

const update = (id: number, recipe: Partial<RecipeDataType>) => api.put(`/recipes/${id}`, recipe)

export const recipeService = {
  getAll,
  create,
  update,
}
