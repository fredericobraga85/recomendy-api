import jwt from 'jsonwebtoken'
import { AuthPayload } from './AuthPayload'
import { TokenError } from './errors/TokenError'
import { User } from '../../model/user/User'

export const createToken = (payload: AuthPayload) => {
  try {
    return jwt.sign(payload, 'my_private_key')
  } catch (e) {
    throw new TokenError(e.message)
  }
}

export const getPayloadFromToken = (token): AuthPayload => {
  try {
    return jwt.verify(token, 'my_private_key') as AuthPayload
  } catch (e) {
    throw new TokenError(e.message)
  }
}
