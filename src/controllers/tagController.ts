import { Router } from 'express'

const routes = Router()

routes.post('/', (req, res) => {
  const { title } = req.body
  res.status(200).json({ msg: title })
})

routes.get('/', (req, res) => {
  res.status(200).json({ msg: 'ok' })
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
