import { Router } from 'express'

import { RecipeController } from 'controllers/recipe.controller'

const router = Router()

router.get('/', RecipeController.getAll)
router.post('/', RecipeController.create)
router.get('/:id', RecipeController.getById)
router.put('/:id', RecipeController.update)

export { router as recipeRouter }
