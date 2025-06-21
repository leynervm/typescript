import z from 'zod'
import { UserAuth } from '../interfaces/user.interface'

const authScheme = z.object({
  email: z
    .string({
      required_error: 'El email es obligatorio.',
      invalid_type_error: 'El email es obligatorio.',
      message: 'El email es obligatorio.'
    })
    .min(8)
    .max(100)
    .email(),

  password: z
    .string({
      required_error: 'La contraseña es obligatorio.',
      invalid_type_error: 'La contraseña es obligatorio.',
      message: 'La contraseña es obligatorio.'
    })
    .min(8)
    .max(100)
})

export const userAuthValidate = (user: UserAuth) => {
  return authScheme.safeParse(user)
}
