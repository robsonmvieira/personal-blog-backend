import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import '@infra/database'
import '@infra/container'
import postController from './controllers/postController'
import tagController from './controllers/tagController'
import userController from './controllers/userController'
import commentController from './controllers/commentController'
import sessionController from './controllers/sessionController'
import categoryRouter from '@infra/routes/categoryRoutes'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/posts', postController)
app.use('/tags', tagController)
app.use('/categories', categoryRouter)

app.use('/users', userController)
app.use('/comments', commentController)
app.use('/sessions', sessionController)

app.listen(8000, () => console.log('app server running : http://localhost:8000'))
