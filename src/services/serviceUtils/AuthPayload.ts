import { User } from '../../model/user/User'

export class AuthPayload {
  user?: User
  success?: boolean
  message?: string
}
