import { getCustomRepository } from 'typeorm'
import { ValidationError } from 'yup'

import { controller } from 'utils/create-controller'
import { recipeValidator } from 'shared/validation/recipe.validator'
import { RecipeRepository } from 'data/repositories/recipe.repository'
import { StatusCodeError } from 'utils/status-code-error'

export const RecipeController = controller({
  getAll: (req, res, next) =>
    getCustomRepository(RecipeRepository)
      .find()
      .then(recipes => res.send(recipes))
      .catch(next),

  getById: (req, res, next) =>
    getCustomRepository(RecipeRepository)
      .findOne({ where: { id: req.params.id } })
      .then(recipe => res.send({ result: recipe || null }))
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

  update: async (req, res, next) => {
    const { id } = req.params
    const recipeRepository = getCustomRepository(RecipeRepository)

    return recipeRepository
      .count({ where: { id } })
      .then(count => {
        if (!count) throw new StatusCodeError(404, 'Such recipe does not exist')
      })
      .then(() =>
        recipeValidator.validate(req.body, { stripUnknown: true, context: { partial: true } }),
      )
      .then(recipe => recipeRepository.update(id, recipe))
      .then(() => recipeRepository.find({ where: { id } }))
      .then(recipe => res.send(recipe))
      .catch(next)
  },
})
