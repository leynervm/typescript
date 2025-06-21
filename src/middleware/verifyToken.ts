import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { UserPayload } from '../interfaces/user.interface'

export const verifyToken = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.access_token
    // _res.json({ token })

    if (token) {
      let keySecret = process.env.SECRET_JWT_KEY || 'mytoken-test'
      const userPayload = jwt.verify(token, keySecret)

      // if (typeof data !== 'string') {
      req.session.user = userPayload as UserPayload
      // }
    }
  } catch (error) {
    // res.json({ error })
  }

  next()
}
