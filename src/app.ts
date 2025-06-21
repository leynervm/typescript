import express from 'express'
import { createServer } from 'node:http'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { postRouter } from './routes/post'
import { userRouter } from './routes/user'
import { authRouter } from './routes/auth'
import { verifyToken } from './middleware/verifyToken'
import session from 'express-session'
import dotenv from 'dotenv'
dotenv.config()

export const createApp = () => {
  const app = express()
  app.use(express.json())
  app.use(cookieParser())
  app.use(cors())

  app.use(
    session({
      secret: process.env.SECRET_JWT_KEY ?? 'mytoken-test',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false } // usa true si usas HTTPS
    })
  )
  app.use(verifyToken)

  const server = createServer(app)
  const PORT = process.env.PORT ?? 1234

  app.get('/', (_, res) => {
    console.log('Servidor Running on NodeJS')
    res.send(`<h1>Servidor Running on NodeJS</h1>`)
  })

  app.use('/auth', authRouter)
  app.use('/posts', postRouter)
  app.use('/users', userRouter)

  server.listen(PORT, () =>
    console.log(`Listen server on http://localhost:${PORT}`)
  )
}
