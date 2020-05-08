import { Repository, getRepository } from 'typeorm'

import Post from '@models/post'
import IPostRepository from '@domain/contracts/IPostRepository'

export default class PostRepository implements IPostRepository {
  private readonly postorm: Repository<Post>
  constructor () {
    this.postorm = getRepository(Post)
  }

  public async index (): Promise<Post> {
    throw new Error('Method not implemented.')
  }

  show (id: Post): Promise<Post | undefined> {
    throw new Error('Method not implemented.')
  }

  create (post: Post): Promise<Post> {
    throw new Error('Method not implemented.')
  }

  update (id: string, post: Post): Promise<Post | undefined> {
    throw new Error('Method not implemented.')
  }

  remove (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
