import { container } from 'tsyringe'

import '@infra/adapters'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
import CategoryRepository from '@infra/repositories/categoryRepository'
import IUserRepository from '@domain/contracts/IUserRepository'
import ITagRepository from '@domain/contracts/ITagRepository'
import UserRepository from '@infra/repositories/userRepository'
import TagRepository from '@infra/repositories/tagRepository'

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository', CategoryRepository)

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<ITagRepository>('TagRepository', TagRepository)
