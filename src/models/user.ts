import { error } from 'console'
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
}
