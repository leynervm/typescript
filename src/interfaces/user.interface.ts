export interface UserI {
  name: string
  lastname: string
  nickname: string
  email: string
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
