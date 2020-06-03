import Post from './post'
import {
  Entity, PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, OneToMany, JoinTable
} from 'typeorm'

@Entity('categories')
export default class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @OneToMany(type => Post, post => post.category, { lazy: true })
  @JoinTable()
  posts: Post[]

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
