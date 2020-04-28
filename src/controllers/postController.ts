import { Router } from 'express'

import { getCustomRepository } from 'typeorm'
import PostRepository from '../repository/postRepository'
const routes = Router()

routes.post('/', async (req, res) => {
  try {
    const postRepository = getCustomRepository(PostRepository)
    const data = await postRepository.save(req.body)
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
})

routes.get('/', async (req, res) => {
  const postRepository = getCustomRepository(PostRepository)
  const posts = await postRepository.find()
  res.status(200).json(posts)
})

routes.get('/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json({ msg: id })
})
routes.put('/:id', (req, res) => {
  const { title } = req.body
  const { id } = req.params
  res.status(200).json({ msg: id, body: title })
})

routes.delete('/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json({ msg: id, body: 'ok' })
})
export default routes
