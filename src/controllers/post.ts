import { Request, Response } from 'express'
import { partialPostRequest, postRequest } from '../validators/post'
import { PostModel } from '../models/post'
import { PostStatus } from '../interfaces/post'

export class PostController {
  static getAll = async (request: Request, res: Response): Promise<void> => {
    try {
      const { search, publish } = request.query
      const result = await PostModel.getAll({
        search: search as string,
        publish: publish as PostStatus
      })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static findById = async (request: Request, res: Response): Promise<void> => {
    try {
      const { id } = request.params
      const result = await PostModel.findById({ id: Number(id) })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static create = async (request: Request, res: Response): Promise<void> => {
    try {
      const parse = postRequest(request.body)
      if (parse.success) {
        const result = await PostModel.create(parse.data)
        res.status(result.status).json(result)
        return
      }
      res
        .status(422)
        .json({ status: 422, errors: JSON.parse(parse.error.message) })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static update = async (request: Request, res: Response): Promise<void> => {
    try {
      const { id } = request.params
      const parse = partialPostRequest(request.body)

      if (parse.success) {
        const result = await PostModel.update({
          id: Number(id),
          values: parse.data
        })
        res.status(result.status).json(result)
        return
      }
      res.status(422).json({
        status: 422,
        errors: JSON.parse(parse.error.message)
      })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const result = await PostModel.delete({ id: Number(id) })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }
}
