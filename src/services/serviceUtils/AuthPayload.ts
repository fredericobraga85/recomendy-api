import { User } from '../../model/user/User'

export class AuthPayload {
  user?: User
}

export const createPayload = (user: User) => {
  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatarUrl: user.avatarUrl,
      roles: user.roles
    }
  } as AuthPayload
}
