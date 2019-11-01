import { ModelBase } from '../base/ModelBase'
import { Role } from '../role/Role'

export class User extends ModelBase {
  firstName: String
  surName: String
  email: String
  avatarUrl: String
  roles: Role[]
}
