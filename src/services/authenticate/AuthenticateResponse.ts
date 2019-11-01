import { User } from '../../model/user/User'
import { ResponseBase } from '../base/ResponseBase'

export class AuthenticateResponse extends ResponseBase {
  user?: User
  token?: string
}
