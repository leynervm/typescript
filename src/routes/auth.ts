import { Router } from 'express'
import { AuthController } from '../controllers/auth'

export const authRouter = Router()

authRouter.get('', AuthController.index)
authRouter.post('/login', AuthController.login)
authRouter.post('/register', AuthController.register)
authRouter.post('/logout', AuthController.logout)
authRouter.get('/protected', AuthController.protected)
