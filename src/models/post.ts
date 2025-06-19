import { AppDataSource } from '../db/db'
import { Post } from '../entity/Post'
import { PostFilters, PostI } from '../interfaces/post'

export class PostModel {
  private static repository = AppDataSource.getRepository(Post)

  static getAll = async ({ search, publish }: PostFilters): Promise<any> => {
    try {
      // const posts = await Post.findBy({
      //   title: ILike(`%${search}%`),
      // order: {
      //     id: 'DESC'
      //   }
      // })
      const query = this.repository
        .createQueryBuilder()
        .select('posts')
        .from(Post, 'posts')

      if (search) {
        query.andWhere('posts.title ILIKE :search', {
          search: `%${search}%`
        })
      }

      if (publish) {
        query.andWhere('posts.publish = :publish', { publish })
      }

      const posts = await query
        .orderBy({
          'posts.id': 'DESC',
          'posts.title': 'ASC'
        })
        .getMany()

      // const posts = await Post.find({
      //   // where: [{ title: search }],
      //   order: {
      //     id: 'DESC'
      //   }
      // })
      // query: query.getSql()
      return { status: 200, posts }
    } catch (error) {
      if (error instanceof Error) {
        return { status: 500, message: error.message }
      }
    }
  }

  static findById = async ({ id }: { id: number }): Promise<any> => {
    try {
      const result = await this.repository.findOneBy({ id })
      if (!result) {
        return { status: 404, message: 'No se encontró el Post' }
      }
      return { status: 200, post: result }
    } catch (error) {
      if (error instanceof Error) {
        return { status: 500, message: error.message }
      }
    }
  }

  static create = async (values: PostI): Promise<any> => {
    try {
      // throw new Error('Este es un error que yo LeynerVM he generado !! !!')
      // const result = await AppDataSource.manager.insert(Post, values)
      const post = this.repository.create(values)
      const result = await this.repository.save(post)
      return { status: 201, post: result }
    } catch (error) {
      if (error instanceof Error) {
        return { status: 500, message: error.message }
      }
    }
  }

  static update = async ({
    id,
    values
  }: {
    id: number
    values: Partial<PostI>
  }): Promise<any> => {
    try {
      const post = await this.repository.findOneBy({ id })
      if (post) {
        this.repository.merge(post, values)
        const result = await this.repository.save(post)
        return { status: 200, post: result }
      }
      return { status: 404, message: 'No se encontró el Post' }
    } catch (error) {
      if (error instanceof Error) {
        return { status: 500, message: error.message }
      }
    }
  }

  static delete = async ({ id }: { id: number }): Promise<any> => {
    try {
      const post = await this.repository.findOneBy({ id })
      if (post) {
        const result = await this.repository.delete(id)
        if (result.affected === 0) {
          return { status: 404, message: 'No se encontró el Post' }
        }
        return { status: 200, message: 'Usuario eliminado correctamente' }
      }
      return { status: 404, message: 'No se encontró el Post' }
    } catch (error) {
      if (error instanceof Error) {
        return { status: 500, message: error.message }
      }
    }
  }
}
