import { AuthenticateResponse } from './AuthenticateResponse'
import { User } from '../../model/user/User'
import { Role } from '../../model/role/Role'

export function authenticate({ _ }, { email, pwd }) {
  return {
    token: `this is my token: ${pwd}`,
    user: {
      id: 'myId',
      firstName: 'Fred',
      surName: 'Braga',
      email: email,
      avatarUrl: '',
      roles: [
        {
          id: 'role id',
          name: 'Admin',
          desc: 'use it all'
        } as Role
      ]
    } as User
  } as AuthenticateResponse
}
