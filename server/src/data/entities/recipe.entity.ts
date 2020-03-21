import { Entity, Column } from 'typeorm'

import { AbstractEntity } from 'data/abstract/abstract.entity'

@Entity()
export class Recipe extends AbstractEntity {
  @Column()
  title: string

  @Column()
  description: string

  @Column()
  body: string
}
