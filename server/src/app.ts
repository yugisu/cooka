import 'reflect-metadata'

import express from 'express'
import dotenv from 'dotenv'

import { initializeRoutes } from './routes'
import { initializeMiddlewares } from './middlewares'

dotenv.config()

const app = express()

// Initialize middleware
initializeMiddlewares(app)

// Initialize routes
initializeRoutes(app)

export { app }
