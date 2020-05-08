import { Repository, getRepository } from 'typeorm'
import Tag from '@models/tag'
import ITagRepository from '@domain/contracts/ITagRepository'

export default class TagRepository implements ITagRepository {
  private readonly tagOrm: Repository<Tag>
  constructor () {
    this.tagOrm = getRepository(Tag)
  }

  index (): Promise<Tag> {
    throw new Error('Method not implemented.')
  }

  show (id: Tag): Promise<Tag | undefined> {
    throw new Error('Method not implemented.')
  }

  create (tag: Tag): Promise<Tag> {
    throw new Error('Method not implemented.')
  }

  update (id: string, tag: Tag): Promise<Tag | undefined> {
    throw new Error('Method not implemented.')
  }

  remove (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
