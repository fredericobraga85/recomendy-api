import { AuthenticateResponse } from './AuthenticateResponse'
import { createToken } from '../serviceUtils/tokenizer'
import { ROLES } from '../../database/mock'
import { AuthPayload } from '../serviceUtils/AuthPayload'

export const authenticate = async (
  email: string,
  pwd: string
): Promise<AuthenticateResponse> => {
  const payload = {
    user: {
      id: 'myId',
      firstName: 'Fred',
      lastName: 'Braga',
      email: email,
      avatarUrl: '',
      roles: [ROLES.USER]
    }
  } as AuthPayload

  const token = createToken(payload)

  return {
    token
  }
}
