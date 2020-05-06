import { injectable, inject } from 'tsyringe'
import IUserRepository from '@domain/contracts/IUserRepository'
import User from '@models/user'

@injectable()
export default class CreateUserService {
  constructor (@inject('UserRepository')
  private readonly userRepository: IUserRepository) {
  }

  public async exec (category: User): Promise<User> {
    const result = await this.userRepository.save(category)
    return result
  }
}
