import { hash } from 'bcryptjs'

export default class EncryptService {
  public async exec (password: string): Promise<string> {
    const passHashed = await hash(password, 8)
    return passHashed
  }
}
