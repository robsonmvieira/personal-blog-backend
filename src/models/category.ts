import { Post } from './post'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  posts?: Post[]

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
