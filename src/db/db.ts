import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Post } from '../entity/Post'
import { User } from '../entity/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'typeorm',
  synchronize: true,
  logging: true,
  entities: [User, Post],
  subscribers: [],
  migrations: []
})
