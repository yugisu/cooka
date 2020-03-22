import express, { Express } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

export const initializeMiddlewares = (app: Express) => {
  app.use(logger('dev'))

  app.use(cors())

  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}
