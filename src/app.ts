import express from 'express'
import { createServer } from 'node:http'
import cors from 'cors'
import { postRouter } from './routes/post'
import { userRouter } from './routes/user'

export const createApp = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())
  const server = createServer(app)
  const PORT = process.env.PORT ?? 1234

  app.get('/', (_, res) => {
    console.log('Servidor Running on NodeJS')
    res.send(`<h1>Servidor Running on NodeJS</h1>`)
  })

  app.use('/posts', postRouter)
  app.use('/users', userRouter)

  server.listen(PORT, () =>
    console.log(`Listen server on http://localhost:${PORT}`)
  )
}
