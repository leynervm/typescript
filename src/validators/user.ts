import z from 'zod'
import { UserI, UserStatus } from '../interfaces/user.interface'

const userScheme = z.object({
  name: z
    .string({
      required_error: 'El nombre es obligatorio.',
      invalid_type_error: 'El nombre es obligatorio.',
      message: 'El nombre es obligatorio.'
    })
    .min(3)
    .max(255),
  lastname: z
    .string({
      required_error: 'El apellido es obligatorio.',
      invalid_type_error: 'El apellidos es obligatorio.',
      message: 'El apellido es obligatorio.'
    })
    .min(6)
    .max(255),
  nickname: z
    .string({
      required_error: 'El nickname es obligatorio.',
      invalid_type_error: 'El nickname es obligatorio.',
      message: 'El nickname es obligatorio.'
    })
    .min(8)
    .max(100),
  email: z
    .string({
      required_error: 'El email es obligatorio.',
      invalid_type_error: 'El email es obligatorio.',
      message: 'El email es obligatorio.'
    })
    .min(8)
    .max(100)
    .email(),
  verified: z
    .date({
      invalid_type_error: 'El campo verificado debe ser una fecha válida.',
      message: 'El campo verificado debe ser una fecha válida.'
    })
    .nullable()
    .optional(),
  status: z
    .nativeEnum(UserStatus, {
      required_error: 'El campo estado es obligatorio.',
      invalid_type_error: `Solo se acepatan valores permitidos '0' | '1`,
      message: `Solo se acepatan valores permitidos '0' | '1`
    })
    .optional()
    .default(UserStatus.ACTIVO)
})

export const userValidate = (user: UserI) => {
  return userScheme.safeParse(user)
}

export const userPartialValidate = (user: Partial<UserI>) => {
  return userScheme.partial().safeParse(user)
}
