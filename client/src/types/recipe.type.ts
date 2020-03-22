export type RecipeDataType = {
  title: string
  image?: string
  description: string
  body: string
}

export type RecipeType = RecipeDataType & {
  id: number
  createdAt: string
  updatedAt: string
  deletedAt?: string | undefined
}
