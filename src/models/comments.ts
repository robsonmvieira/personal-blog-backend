
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import Post from './post'

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  post_id: string

  @ManyToOne(type => Post, post => post.comments)
  post: Post

  @Column()
  content: string
}
