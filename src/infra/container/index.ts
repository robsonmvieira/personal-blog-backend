import UserRepository from '@infra/repository/userRepository'
import { container } from 'tsyringe'

import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import CategoryRepository from '@infra/repository/categoryRepository'

import '@infra/adapters'
import IUserRepository from '@domain/contracts/IUserRepository'

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository', CategoryRepository)

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
