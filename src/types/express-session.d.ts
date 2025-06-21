import { UserPayload } from '../interfaces/user.interface'

declare module 'express-session' {
  interface SessionData {
    user: null | UserPayload
  }
}

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         id: number
//         name: string
//         lastname: string
//         email: string
//         nickname: string
//         verified: string
//       }
//     }
//   }
// }

// export {}

// declare namespace Express {
//   export interface Request {
//     user?: {} //My User
//   }
// }
