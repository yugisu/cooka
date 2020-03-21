import { RequestHandler } from 'express'

/**
 * Creates controller with autocomplete
 */
export const controller = <KeyType extends string = string>(
  controllerObj: Record<KeyType, RequestHandler>,
): Record<KeyType, RequestHandler> => controllerObj
