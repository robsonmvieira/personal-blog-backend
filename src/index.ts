import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import postController from './controllers/postController'
import tagController from './controllers/tagController'
import categoryController from './controllers/categoryController'
import userController from './controllers/userController'
import commentController from './controllers/commentController'
import sessionController from './controllers/sessionController'
import './database'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/posts', postController)
app.use('/tags', tagController)
app.use('/categories', categoryController)
app.use('/users', userController)
app.use('/comments', commentController)
app.use('/sessions', sessionController)

app.listen(8000, () => console.log('app server running : http://localhost:8000'))
