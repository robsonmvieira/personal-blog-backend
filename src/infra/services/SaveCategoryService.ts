import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import Category from '@models/category'

@injectable()
export default class SaveCategoryService {
  constructor (@inject('CategoryRepository')
  private readonly categoryRepository: ICategoryRepository) {
  }

  public async exec (category: Category): Promise<Category> {
    const result = await this.categoryRepository.save(category)
    return result
  }
}
