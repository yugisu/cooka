import { Entity, Column } from 'typeorm'

import { AbstractEntity } from 'data/abstract/abstract.entity'

@Entity({ orderBy: { id: 'DESC' } })
export class Recipe extends AbstractEntity {
  @Column()
  title: string

  @Column({ nullable: true })
  image: string

  @Column()
  description: string

  @Column()
  body: string
}
