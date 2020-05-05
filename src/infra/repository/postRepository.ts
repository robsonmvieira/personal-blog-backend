import { Repository, EntityRepository } from 'typeorm'

import Post from '@models/post'

@EntityRepository(Post)
export default class PostRepository extends Repository<Post> {}
