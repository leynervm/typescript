import { Router } from 'express'
import { UserController } from '../controllers/user'

export const userRouter = Router()

userRouter.get('', UserController.getAll)
// userRouter.get('/:id', UserController.findById)
userRouter.post('', UserController.create)
// userRouter.patch('/:id', UserController.update)
// userRouter.delete('/:id', UserController.delete)
