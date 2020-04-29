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

routes.get('/:id', async (req, res) => {
  const { id } = req.params
  const postRepository = getCustomRepository(PostRepository)
  const post = await postRepository.findOne({ id })
  res.status(200).json(post)
})
routes.put('/:id', async (req, res) => {
  const { id } = req.params
  const postRepository = getCustomRepository(PostRepository)
  const post = await postRepository.update(id, req.body)
  res.status(200).json(post)
})

routes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const postRepository = getCustomRepository(PostRepository)
    const post = await postRepository.findOne({ id })
    // console.log(post)
    if (post != null) {
      const r = await postRepository.remove(post)
      console.log(r)
      return res.status(200).json(true)
    }
    return res.status(401).json({ msg: 'Post was not found' })
  } catch (error) {
    console.log(error)
  }
})
export default routes
