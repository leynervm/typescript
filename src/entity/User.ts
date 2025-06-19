import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UserStatus } from '../interfaces/user.interface'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'varchar', length: 255 })
  lastname: string

  @Column({ type: 'varchar', length: 100 })
  nickname: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string
  
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  verified: Date | null

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVO })
  status: UserStatus

  @CreateDateColumn({ type: 'timestamp' })
  date: Date
}
