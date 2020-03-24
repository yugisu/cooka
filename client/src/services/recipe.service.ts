import { api } from 'utils/api.util'
import { RecipeDataType, RecipeType } from 'types/recipe.type'

const getAll = () => api.get('/recipes').json<RecipeType[]>()

const getOne = (id: number) =>
  api
    .get(`/recipes/${id}`)
    .json<{ result: RecipeType | null }>()
    .then(({ result }) => result)

const create = (recipe: RecipeDataType) => api.post('/recipes', recipe).json<RecipeType>()

const update = (id: number, recipe: Partial<RecipeDataType>) =>
  api.put(`/recipes/${id}`, recipe).json<RecipeType>()

export const recipeService = {
  getAll,
  getOne,
  create,
  update,
}
