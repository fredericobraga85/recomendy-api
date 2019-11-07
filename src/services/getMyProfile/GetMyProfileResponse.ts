import { User } from '../../model/user/User'
import { ResponseBase } from '../base/ResponseBase'

export class GetMyProfileResponse extends ResponseBase {
  user?: User
}
