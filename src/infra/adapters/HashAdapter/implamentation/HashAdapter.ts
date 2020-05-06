import IHashAdapter from '../contract/IHashAdapter'
import { hash, compare } from 'bcryptjs'

export default class HashAdapter implements IHashAdapter {
  async compare (password: string, hashedPass: string): Promise<boolean> {
    const passHashed = await compare(password, hashedPass)
    return passHashed
  }

  async encrypt (password: string): Promise<string> {
    const passHashed = await hash(password, 8)
    return passHashed
  }
}
