import { Entity } from 'typeorm'

@Entity('posts')
export class Post {
  public id: string;
  public title: string;
  public subtitle: string;
  public content: string
}
