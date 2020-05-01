import { compare } from 'bcryptjs'

export default class ComparePasswordService {
  public async exec (password: string, hashedPass: string): Promise<boolean> {
    const passHashed = await compare(password, hashedPass)
    return passHashed
  }
}
