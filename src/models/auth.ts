import { AppDataSource } from '../db/db'
import { User } from '../entity/User'
import { UserAuth, UserPayload } from '../interfaces/user.interface'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthModel {
  private static repository = AppDataSource.getRepository(User)

  static login = async ({ email, password }: UserAuth) => {
    const user = await this.repository.findOneBy({ email })

    if (user) {
      const isValid = bcrypt.compareSync(password, user.password!)
      if (!isValid) {
        return { status: 401, message: 'La clave ingresada es incorrecta' }
      }

      let keySecret = process.env.SECRET_JWT_KEY || 'mytoken-test'

      const userPayload: UserPayload = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        nickname: user.nickname,
        email: user.email,
        verified: user.verified
      }

      const token = jwt.sign(userPayload, keySecret, { expiresIn: '1h' })
      return { status: 200, user: userPayload, token }
    }
    return { status: 404, message: 'Usuario no se encuentra registrado' }
  }

  static register = () => {}

  static logout = () => {}

  static protected = () => {}
}
