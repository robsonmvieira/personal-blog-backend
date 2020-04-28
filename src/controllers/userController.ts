import { getCustomRepository } from 'typeorm'
import { Router } from 'express'
import UserRepository from '../repository/userRepository'
const routes = Router()

routes.post('/', async (req, res) => {
  try {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.save(req.body)
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
})

routes.get('/', async (req, res) => {
  const userRepository = getCustomRepository(UserRepository)
  const users = await userRepository.find()
  res.status(200).json(users)
})

routes.get('/:id', async (req, res) => {
  const userRepository = getCustomRepository(UserRepository)
  const { id } = req.params
  const query = await userRepository.findOne({ id })
  res.status(200).json(query)
})
routes.put('/:id', async (req, res) => {
  const userRepository = getCustomRepository(UserRepository)
  const { id } = req.params
  const user = await userRepository.update(id, req.body)
  res.status(200).json(user)
})

routes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const userRepository = getCustomRepository(UserRepository)
  const user = await userRepository.findOne({ id })

  if (user != null) {
    await userRepository.remove(user)
    return res.status(200).json({ message: true })
  }
  return res.status(400).json({ error: 'user was not found' })
}
)
export default routes
