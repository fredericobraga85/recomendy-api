import { ROLES } from '../../database/mock'

export class User {
  id: string
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
  roles: ROLES[]
  createdAt: string
  updatedAt: string
}
