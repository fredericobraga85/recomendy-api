import { ModelBase } from '../base/ModelBase'
import { ROLES } from '../../database/mock'

export class User extends ModelBase {
  firstName: String
  surName: String
  email: String
  avatarUrl: String
  roles: ROLES[]
}
