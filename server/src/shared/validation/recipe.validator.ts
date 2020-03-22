import { object, string } from 'yup'

export const recipeValidator = object({
  title: string().when('$partial', { is: true, otherwise: (s: any) => s.required() }),
  description: string()
    .max(200)
    .when('$partial', { is: true, otherwise: (s: any) => s.required() }),
  body: string().when('$partial', { is: true, otherwise: (s: any) => s.required() }),
})
