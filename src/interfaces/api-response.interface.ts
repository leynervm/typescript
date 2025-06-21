import { UserI } from './user.interface'

export interface ApiResponse<T> {
  status: number
  message?: string
  errors?: Record<string, string[]> // útil para mostrar errores de validación
  // data: T
  //   user?: UserI
  user?: T
  users?: T[]
}

export interface LoginResponse {
  token: string
  user: UserI
}
