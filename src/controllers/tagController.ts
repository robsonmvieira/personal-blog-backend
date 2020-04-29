import { getCustomRepository } from 'typeorm'
import { Router } from 'express'
import TagRepository from '../repository/tagRepository'

const routes = Router()

routes.post('/', async (req, res) => {
  const tagRepository = getCustomRepository(TagRepository)
  const tag = await tagRepository.save(req.body)
  res.status(200).json(tag)
})

routes.get('/', async (req, res) => {
  const tagRepository = getCustomRepository(TagRepository)
  const index = await tagRepository.find()
  res.status(200).json(index)
})

routes.get('/:id', async (req, res) => {
  const { id } = req.params
  const tagRepository = getCustomRepository(TagRepository)
  const index = await tagRepository.findOne({ id })
  res.status(200).json(index)
})

routes.put('/:id', async (req, res) => {
  const { id } = req.params
  const tagRepository = getCustomRepository(TagRepository)
  const tag = await tagRepository.update(id, req.body)
  res.status(200).json(tag)
})

routes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const tagRepository = getCustomRepository(TagRepository)
  const index = await tagRepository.findOne({ id })

  if (index != null) {
    await tagRepository.remove(index)
    return res.status(200).json(true)
  }
  return res.status(401).json({ message: 'tag was not found' })
})

export default routes
