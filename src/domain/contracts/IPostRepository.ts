import Post from '@models/post'

export default interface IPostRepository {
  index(): Promise<Post>
  show(id: Post): Promise<Post | undefined>
  create(post: Post): Promise<Post>
  update(id: string, post: Post): Promise<Post | undefined>
  remove(id: string): Promise<boolean>
}
