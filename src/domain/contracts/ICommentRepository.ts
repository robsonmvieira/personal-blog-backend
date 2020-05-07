import Comment from '@models/comments'

export default interface ICommentRepository {
  index(): Promise<Comment>
  show(id: Comment): Promise<Comment | undefined>
  create(comment: Comment): Promise<Comment>
  update(id: string, comment: Comment): Promise<Comment | undefined>
  remove(id: string): Promise<boolean>
}
