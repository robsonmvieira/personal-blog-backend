import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm'
import Post from './post'

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  isAdmin: string

  @OneToMany(type => Post, post => post.user)
  posts: Post[]
}
