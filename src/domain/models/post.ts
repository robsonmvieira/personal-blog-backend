import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinColumn } from 'typeorm'
import Category from './category'
import User from './user'
import Tag from './tag'
import Comment from './comments'

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true, default: false })
  draw?: boolean

  @Column()
  subtitle: string;

  @Column()
  content: string

  @Column({ type: 'uuid' })
  category_id: string

  @ManyToOne(type => Category, category => category.posts)
  category: Category

  @ManyToMany(type => Tag, tag => tag.posts, { lazy: true })
  tags: Tag[]

  @Column({ type: 'uuid' })
  user_id: string

  @ManyToOne(type => User, user => user.posts)
  @JoinColumn()
  user: User

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[]

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
