import { Repository, EntityRepository } from 'typeorm'
import Comment from '@models/comments'

@EntityRepository(Comment)
export default class CommentRepository extends Repository<Comment> {}
