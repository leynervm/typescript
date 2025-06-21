import { Request, Response } from 'express'
import { userAuthValidate } from '../validators/auth'
import { AuthModel } from '../models/auth'

export class AuthController {
  static index = (req: Request, res: Response) => {
    const user = req.session?.user
    res.json({ status: 200, user })
  }

  static login = async (req: Request, res: Response) => {
    try {
      const parse = userAuthValidate(req.body)
      if (!parse.success) {
        res
          .status(422)
          .json({ status: 422, errors: JSON.parse(parse.error.message) })
        return
      }

      const result = await AuthModel.login(parse.data)
      if (result.token) {
        res.cookie('access_token', result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
      }
      res.status(result.status).json(result)
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ status: 500, message: error.message })
      }
    }
  }

  static register = (req: Request, res: Response) => {
    const parse = userAuthValidate(req.body)
    if (!parse.success) {
      res
        .status(422)
        .json({ status: 422, errors: JSON.parse(parse.error.message) })
    }
    res.json(parse.data)
  }

  static logout = (_req: Request, res: Response) => {
    _req.session.user = null
    res
      .clearCookie('access_token')
      .status(200)
      .json({ status: 200, message: 'Sessión cerrada' })
  }

  static protected = (req: Request, res: Response) => {
    const user = req.session?.user

    if (!user) {
      res.status(403).json({ status: 403, message: 'ruta no autorizada' })
      return
    }

    res.status(200).json({ status: 200, user })
  }
}
