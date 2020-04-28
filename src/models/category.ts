import { Post } from './post'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @OneToMany(type => Post, post => post.category)
  posts: Post[]

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
