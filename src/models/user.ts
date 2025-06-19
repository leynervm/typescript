import { Equal, Not, Or } from 'typeorm'
import { AppDataSource } from '../db/db'
import { User } from '../entity/User'
import { UserI, UsertFilters } from '../interfaces/user.interface'

export class UserModel {
  private static repository = AppDataSource.getRepository(User)

  static getAll = async ({ search }: UsertFilters) => {
    const query = this.repository
      .createQueryBuilder()
      .select('users')
      .from(User, 'users')
    if (search) {
      query.andWhere('users.name ILIKE :search', { search: `%${search}%` })
    }
    const users = await query
      .orderBy({
        'users.id': 'DESC',
        'users.name': 'ASC'
      })
      .getMany()
    return { status: 200, users: users }
  }

  static findById = async ({ id }: { id: number }) => {
    const user = await this.repository.findOneBy({ id })
    if (user) {
      return { status: 200, user }
    }
    return { status: 404, message: `Usuario no encontrado` }
  }

  static create = async (user: UserI) => {
    const { email, nickname } = user
    // const exists = await this.repository.findOne({ where: { email } })
    // const loadedUsers = await this.repository.existsBy({ email })
    // Usando OR
    const loadedUser = await this.repository.findOne({
      where: [{ email }, { nickname }]
    })

    if (loadedUser) {
      const field = loadedUser.email == email ? 'email' : 'nickname'
      return {
        status: 422,
        errors: [
          {
            validation: field,
            message: `El ${field} ${loadedUser[field]} ya se encuentra registrado.`
          }
        ]
      }
    }
    const result = await this.repository.save(user)
    return { status: 201, user: result }
  }

  static update = async ({ id, values }: { id: number, values: Partial<UserI> }) => {
    const { email, nickname } = values
    const userSaved = await this.repository.findOneBy({ id })

    if (!userSaved) {
      return { status: 404, message: `Usuario no encontrado` }
    }

    const loadedUser = await this.repository.findOne({
      where: [
        { email, id: Not(id) },
        { nickname, id: Not(id) }
      ]
    })

    if (loadedUser) {
      const field = loadedUser.email == email ? 'email' : 'nickname'
      return {
        status: 422,
        errors: [
          {
            validation: field,
            message: `El ${field} ${loadedUser[field]} ya se encuentra registrado.`
          }
        ]
      }
    }

    const user = this.repository.merge(userSaved, values)
    const result = await this.repository.save(user)
    return { status: 200, user: result }
  }

  static delete = async ({ id }: { id: number }) => {
    const user = await this.repository.findOneBy({ id })
    if (user) {
      const result = await this.repository.delete({ id })
      return { status: 200, message: `${result.affected} registros eliminado correctamente` }
    }
    return { status: 404, message: `Usuario no encontrado` }
  }
}
