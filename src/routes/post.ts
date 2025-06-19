import { Router } from 'express'
import { PostController } from '../controllers/post'

export const postRouter = Router()

postRouter.get('', PostController.getAll)
postRouter.get('/:id', PostController.findById)
postRouter.post('', PostController.create)
postRouter.patch('/:id', PostController.update)
postRouter.delete('/:id', PostController.delete)
