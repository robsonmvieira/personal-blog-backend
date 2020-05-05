import Category from 'domain/models/category'

export default interface ICategoryRepository {
  save(category: Category): Promise<Category>
  index(): Promise<Category[]>
  show(id: string): Promise<Category | undefined>
  update(id: string, category: Category): Promise<Category | undefined>
  remove(id: string): Promise<boolean>
}
