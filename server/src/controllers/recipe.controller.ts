import { getCustomRepository } from 'typeorm'
import { ValidationError } from 'yup'

import { controller } from 'utils/create-controller'
import { recipeValidator } from 'shared/validation/recipe.validator'
import { RecipeRepository } from 'data/repositories/recipe.repository'

export const RecipeController = controller({
  getAll: async (req, res) => {
    const recipeRepository = getCustomRepository(RecipeRepository)

    const recipes = await recipeRepository.find()

    res.send(recipes)
  },
  create: async (req, res) => {
    const recipeRepository = getCustomRepository(RecipeRepository)

    try {
      const validatedRecipe = await recipeValidator.validate(req.body, { stripUnknown: true })

      const recipe = await recipeRepository.create(validatedRecipe).save()

      res.send(recipe)
    } catch (error) {
      if (!(error instanceof ValidationError)) {
        throw error
      }

      res.status(400).send({ message: 'Invalid recipe', details: error.message })
    }
  },
})
