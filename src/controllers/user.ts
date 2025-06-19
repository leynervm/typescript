import { Request, Response } from 'express'
import { UserModel } from '../models/user'
import { userPartialValidate, userValidate } from '../validators/user'

export class UserController {
  private static model = UserModel

  static getAll = async (req: Request, res: Response) => {
    try {
      const { search } = req.query
      const result = await this.model.getAll({ search: search as string })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static findById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const result = await this.model.findById({ id: Number(id) })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static create = async (req: Request, res: Response) => {
    try {
      const parse = userValidate(req.body)
      if (!parse.success) {
        res
          .status(422)
          .json({ status: 422, errors: JSON.parse(parse.error.message) })
        return
      }

      const result = await this.model.create(parse.data)
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static update = async (req: Request, res: Response) => {
    try {
      const parse = userPartialValidate(req.body)
      if (!parse.success) {
        res
          .status(422)
          .json({ status: 422, errors: JSON.parse(parse.error.message) })
        return
      }

      const { id } = req.params
      const result = await this.model.update({ id: Number(id), values: parse.data })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }

  static delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const result = await this.model.delete({ id: Number(id) })
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      }
    }
  }
}
