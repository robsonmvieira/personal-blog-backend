import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import Category from '@models/category'

@injectable()
export default class SaveCategoryService {
  constructor (@inject('CategoryRepository')
  private readonly categoryRepository: ICategoryRepository) {
  }

  public async exec (): Promise<Category[]> {
    const categories = await this.categoryRepository.index()
    return categories
  }
}
