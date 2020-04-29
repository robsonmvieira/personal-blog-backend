import { getCustomRepository } from 'typeorm'
import { Router } from 'express'
import CommentRepository from '../repository/commentRepository'

const routes = Router()

routes.post('/', async (req, res) => {
  const commentRepository = getCustomRepository(CommentRepository)
  const comment = await commentRepository.save(req.body)
  return res.status(201).json(comment)
})
routes.get('/', async (req, res) => {
  const commentRepository = getCustomRepository(CommentRepository)
  const index = await commentRepository.find()
  return res.status(200).json(index)
})
routes.get('/:id', async (req, res) => {
  const { id } = req.params
  const commentRepository = getCustomRepository(CommentRepository)
  const index = await commentRepository.findOne({ id })

  return res.status(200).json(index)
})

routes.put('/:id', async (req, res) => {
  const { id } = req.params
  const commentRepository = getCustomRepository(CommentRepository)
  const result = await commentRepository.update(id, req.body)
  return res.status(200).json(result)
})
routes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const commentRepository = getCustomRepository(CommentRepository)
  const index = await commentRepository.findOne({ id })
  if (index != null) {
    await commentRepository.remove(index)
    return res.status(201).json(true)
  }
  return res.status(401).json({ message: 'comment was not found' })
})

export default routes
