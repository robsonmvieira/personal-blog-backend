import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import { Category } from './category'

@Entity('posts')
export class Post {
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

  @ManyToOne(type => Category, category => category.posts)
  category: Category

  @CreateDateColumn()
  cretated_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
