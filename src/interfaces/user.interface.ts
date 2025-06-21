type Email = string
type Password = string

export interface UserI {
  name: string
  lastname: string
  nickname: string
  email: Email
  password: Password
  verified?: Date | null
  status?: UserStatus
}

export interface UsertFilters {
  search?: string
}

export enum UserStatus {
  ACTIVO = '0',
  INACTIVO = '1'
}

export interface UserAuth {
  email: Email
  password: Password
}

export interface UserPayload {
  id: number
  name: string
  lastname: string
  nickname: string
  email: Email
  verified?: Date | null
}
