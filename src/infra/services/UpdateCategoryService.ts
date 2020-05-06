import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import Category from '@models/category'

@injectable()
export default class UpdateCategoryService {
  constructor (@inject('CategoryRepository')
  private readonly categoryRepository: ICategoryRepository) {
  }

  public async exec (id: string, category: Category): Promise<Category | undefined> {
    const result = await this.categoryRepository.update(id, category)
    return result
  }
}
