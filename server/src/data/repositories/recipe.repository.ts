import { Repository, EntityRepository } from 'typeorm'

import { Recipe } from 'data/entities/recipe.entity'

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {}
