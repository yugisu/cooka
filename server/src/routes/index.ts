import { Express } from 'express'

import { recipeRouter } from './recipe.route'

export const initializeRoutes = (app: Express) => {
  app.use('/recipes', recipeRouter)
}
