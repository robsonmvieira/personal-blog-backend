import express from 'express'
import postController from './controllers/postController'
const app = express()

app.use(express.json())

app.use('/posts', postController)

app.listen(8000, () => console.log('app server running : http://localhost:8000'))
