import { Repository, EntityRepository } from 'typeorm'
import Tag from '@models/tag'

@EntityRepository(Tag)
export default class TagRepository extends Repository<Tag> {}
