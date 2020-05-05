import { getRepository, Repository } from 'typeorm'
import ICategoryRepository from 'domain/contracts/ICategoryRepository'
import Category from '@models/category'

export default class CategoryRepository implements ICategoryRepository {
  private readonly ormRepo: Repository<Category>

  constructor () {
    this.ormRepo = getRepository(Category)
  }

  public async save (category: Category): Promise<Category> {
    const newCategory = await this.ormRepo.save(category)
    return newCategory
  }

  public async index (): Promise<Category[]> {
    const categories = await this.ormRepo.find()
    return categories
  }

  public async show (id: string): Promise<Category | undefined> {
    const category = await this.ormRepo.findOne(id)
    return category
  }

  public async update (id: string, category: Category): Promise<Category> {
    await this.ormRepo.update(id, category)
    return category
  }

  public async remove (id: string): Promise<boolean> {
    const category = await this.ormRepo.findOne(id)

    if (category != null) {
      await this.ormRepo.remove(category)
      return true
    }

    return false
  }
}
