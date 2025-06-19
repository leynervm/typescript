import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm'
import { PostStatus } from '../interfaces/post'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 100 })
  title: string

  @Column('text')
  content: string

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.LOCAL
  })
  publish: PostStatus

  @CreateDateColumn({ type: 'timestamp' })
  date: Date
}
