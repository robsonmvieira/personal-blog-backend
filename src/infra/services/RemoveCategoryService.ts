import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'

@injectable()
export default class RemoveCategoryService {
  constructor (@inject('CategoryRepository')
  private readonly categoryRepository: ICategoryRepository) {
  }

  public async exec (id: string): Promise<boolean> {
    const result = await this.categoryRepository.remove(id)
    return result
  }
}
