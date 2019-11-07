import jwt from 'jsonwebtoken'
import { AuthPayload } from './AuthPayload'

export const createToken = (payload: AuthPayload) => {
  return jwt.sign(payload, 'my_private_key')
}

export const verifyToken = (token): AuthPayload => {
  const rslt = jwt.verify(token, 'my_private_key')

  if (rslt as object) {
    return rslt as AuthPayload
  }

  const payload = new AuthPayload()
  payload.success = false
  payload.message = 'Error'
}
