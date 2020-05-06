import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import Category from '@models/category'

@injectable()
export default class ShowCategoryService {
  constructor (@inject('CategoryRepository')
  private readonly categoryRepository: ICategoryRepository) {
  }

  public async exec (id: string): Promise<Category | undefined> {
    const result = await this.categoryRepository.show(id)
    return result
  }
}
