import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm'
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

  @Column('boolean')
  draw: boolean

  @Column()
  subtitle: string;

  @Column()
  content: string

  @Column({ type: 'uuid' })
  category_id: string

  @ManyToOne(type => Category, category => category.posts)
  category: Category

  @ManyToMany(type => Tag, tag => tag.posts)
  tags: Tag[]

  @ManyToOne(type => User, user => user.posts)
  user: User

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[]

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @Column({ type: 'uuid' })
  user_id: string
}
