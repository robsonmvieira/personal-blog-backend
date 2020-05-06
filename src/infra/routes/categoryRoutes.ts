import { Router } from 'express'
import CategoryController from 'controllers/categoryController'
const categoryController = new CategoryController()
const route = Router()

route.post('/', categoryController.save)
route.get('/', categoryController.index)
route.get('/:id', categoryController.show)
route.put('/:id', categoryController.update)
route.delete('/:id', categoryController.remove)

export default route
