
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Post from './post'

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  post_id: string

  @ManyToOne(type => Post, post => post.comments)
  @JoinColumn()
  post: Post

  @Column()
  content: string
}
