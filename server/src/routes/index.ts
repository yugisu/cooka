import { Express } from 'express'

import { helloRouter } from './hello.route'

export const initializeRoutes = (app: Express) => {
  app.use('/', helloRouter)
}
