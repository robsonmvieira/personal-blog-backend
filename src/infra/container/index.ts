import { container } from 'tsyringe'

import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import CategoryRepository from '@infra/repository/categoryRepository'

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository', CategoryRepository)
