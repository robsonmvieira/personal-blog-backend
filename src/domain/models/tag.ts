import Post from './post'
import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, JoinTable } from 'typeorm'

@Entity('tags')
export default class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToMany(type => Post, post => post.tags)
  @JoinTable()
  posts: Post[]

  @Column()
  title: string
}
