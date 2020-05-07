import Tag from '@models/tag'

export default interface ITagRepository {
  index(): Promise<Tag>
  show(id: Tag): Promise<Tag | undefined>
  create(tag: Tag): Promise<Tag>
  update(id: string, tag: Tag): Promise<Tag | undefined>
  remove(id: string): Promise<boolean>
}
