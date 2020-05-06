export default interface IHashAdapter {
  compare (password: string, hashedPass: string): Promise<boolean>
  encrypt (password: string): Promise<string>
}
