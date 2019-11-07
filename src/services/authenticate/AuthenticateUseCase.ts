import { AuthenticateResponse } from './AuthenticateResponse'
import { createToken } from '../serviceUtils/tokenizer'
import { ROLES } from '../../database/mock'

export const authenticate = (
  email: string,
  pwd: string
): AuthenticateResponse => {
  const payload = {
    user: {
      id: 'myId',
      firstName: 'Fred',
      surName: 'Braga',
      email: email,
      avatarUrl: '',
      roles: [ROLES.USER]
    }
  }

  const token = createToken(payload)

  return {
    success: true,
    message: `you did it`,
    token: `this is my token: ${token}`
  }
}
