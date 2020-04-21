import { Router } from 'express'

const routes = Router()

routes.post('/', (req, res) => {
  res.status(200).json({ ...req.body })
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
