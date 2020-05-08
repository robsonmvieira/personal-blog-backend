import { Repository, getRepository } from 'typeorm'
import User from '@models/user'
import IUserRepository from '@domain/contracts/IUserRepository'

export default class userRepository implements IUserRepository {
  private readonly userOrm: Repository<User>
  constructor () {
    this.userOrm = getRepository(User)
  }

  public async save (user: User): Promise<User> {
    const result = await this.userOrm.save(user)
    return result
  }

  public async index (): Promise<User[]> {
    const users = await this.userOrm.find()
    return users
  }

  public async show (id: string): Promise<User | undefined> {
    const userExists = await this.userOrm.findOne(id)
    return userExists
  }

  public async update (id: string, user: User): Promise<User | undefined> {
    const userExists = await this.userOrm.findOne(id)
    return userExists
  }

  public async remove (id: string): Promise<boolean | undefined > {
    const userExists = await this.userOrm.findOne(id)
    if (userExists === undefined) {
      return false
    }
    await this.userOrm.remove(userExists)
    return true
  }
}
