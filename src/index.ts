import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { container } from 'tsyringe'
// import CategoryRepository from '@infra/repository/categoryRepository'
import postController from './controllers/postController'
import tagController from './controllers/tagController'
// import categoryController from './controllers/categoryController'
import userController from './controllers/userController'
import commentController from './controllers/commentController'
import sessionController from './controllers/sessionController'
import '@infra/database'
import '@infra/container'
import CategoryController from 'controllers/categoryController'
const categoryController = container.resolve(CategoryController)
const app = express()

app.use(express.json())
app.use(cors())
app.use('/posts', postController)
app.use('/tags', tagController)
app.get('/categories', categoryController.index)
app.use('/users', userController)
app.use('/comments', commentController)
app.use('/sessions', sessionController)

app.listen(8000, () => console.log('app server running : http://localhost:8000'))
