import TagController from 'controllers/tagController'
import { Router } from 'express'

const tagController = new TagController()

const route = Router()
route.get('/', tagController.index)

export default route
