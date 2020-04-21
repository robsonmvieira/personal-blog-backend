import express from 'express'
import postController from './controllers/postController'
import tagController from './controllers/tagController'
import 'reflect-metadata'
import './database'
const app = express()

app.use(express.json())

app.use('/posts', postController)
app.use('/tags', tagController)

app.listen(8000, () => console.log('app server running : http://localhost:8000'))
