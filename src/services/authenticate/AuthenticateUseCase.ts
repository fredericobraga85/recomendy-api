import { AuthenticateResponse } from './AuthenticateResponse'
import { createToken } from '../serviceUtils/tokenizer'
import { ROLES } from '../../database/mock'
import { AuthPayload } from '../serviceUtils/AuthPayload'
import { Role } from '../../model/role/Role'

export const authenticate = (
  email: string,
  pwd: string
): AuthenticateResponse => {
  const payload = {
    user: {
      id: 'myId',
      firstName: 'Fred',
      lastName: 'Braga',
      email: email,
      avatarUrl: '',
      roles: [ROLES.ADMIN]
    }
  } as AuthPayload

  const token = createToken(payload)

  return {
    token
  }
}
