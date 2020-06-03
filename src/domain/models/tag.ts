import Post from './post'
import { Entity, PrimaryGeneratedColumn, ManyToMany, Column } from 'typeorm'

@Entity('tags')
export default class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToMany(type => Post, post => post.tags)
  posts: Post[]

  @Column()
  title: string
}
