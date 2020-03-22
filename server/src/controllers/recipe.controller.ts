import { getCustomRepository } from 'typeorm'
import { ValidationError } from 'yup'

import { controller } from 'utils/create-controller'
import { recipeValidator } from 'shared/validation/recipe.validator'
import { RecipeRepository } from 'data/repositories/recipe.repository'

export const RecipeController = controller({
  getAll: (req, res, next) =>
    getCustomRepository(RecipeRepository)
      .find()
      .then(recipes => res.send(recipes))
      .catch(next),

  create: (req, res, next) =>
    recipeValidator
      .validate(req.body, { stripUnknown: true })
      .then(recipe => getCustomRepository(RecipeRepository).create(recipe))
      .then(recipe => recipe.save())
      .then(recipe => res.send(recipe))
      .catch(e =>
        e instanceof ValidationError ? res.status(400).send({ message: e.message }) : next(e),
      ),
})
