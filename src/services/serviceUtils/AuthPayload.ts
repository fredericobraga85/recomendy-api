import { User } from '../../model/user/User'

export class AuthPayload {
  user?: User
  success: boolean = true
  messages?: string[]
}
