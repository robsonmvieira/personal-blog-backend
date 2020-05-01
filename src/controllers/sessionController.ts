import { Router } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/user'
import { sign } from 'jsonwebtoken'
import ComparePasswordService from '../infra/services/comparePasswordService'
import { environmnets } from '../environments/environments'

const routes = Router()
const compareService = new ComparePasswordService()
routes.post('/', async (req, res) => {
  const userRepository = getRepository(User)
  const { email, password } = req.body
  const userExist = await userRepository.findOne({ email })

  if (userExist == null) {
    return res.status(400).json({ error: 'email/password does not match' })
  }
  if (password === undefined || email === undefined) {
    return res.status(400).json({ error: 'bad request' })
  }

  const passwordMatch = await compareService.exec(password, userExist.password)
  if (!passwordMatch) {
    return res.status(400).json({ error: 'email/password does not match' })
  }
  const user = {
    id: userExist.id,
    isAdmin: userExist.isAdmin
  }
  const token = sign(user, environmnets.key, {
    expiresIn: environmnets.expiresIn
  })
  return res.status(200).json({ login: true, token })
})

export default routes
