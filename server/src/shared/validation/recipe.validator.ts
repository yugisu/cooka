import { object, string } from 'yup'

export const recipeValidator = object({
  title: string().required(),
  description: string()
    .max(200)
    .required(),
  body: string().required(),
})
