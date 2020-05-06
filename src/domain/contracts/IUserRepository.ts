import User from '@models/user'

export default interface IUserRepository {
  save(user: User): Promise<User>
  index(): Promise<User[]>
  show(id: string): Promise<User| undefined>
  update(id: string, user: User): Promise<User| undefined>
  remove(id: string): Promise<boolean| undefined>

}
