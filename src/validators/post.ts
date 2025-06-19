import z from 'zod'
import { PostStatus } from '../interfaces/post'

const postScheme = z.object({
  title: z
    .string({
      required_error: 'El campo titulo es requerido.'
    })
    .min(6, {
      message: 'El campo titulo debe contener al menos 6 carácteres.'
    }),
  content: z.string(),
  publish: z.nativeEnum(PostStatus, {
    message: `Solamente se aceptan valores 'publicado' | 'local'`
  })
})

export const postRequest = (values: object) => {
  return postScheme.safeParse(values)
}

export const partialPostRequest = (values: object) => {
  return postScheme.partial().safeParse(values)
}
