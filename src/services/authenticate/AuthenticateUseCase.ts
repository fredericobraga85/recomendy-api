import { AuthenticateResponse } from './AuthenticateResponse'
import { models } from '../../database/databaseModel'
import { AuthenticationError } from '../../services/serviceUtils/errors/AuthenticationError'
import { createToken } from '../serviceUtils/tokenizer'
import { createPayload } from '../serviceUtils/AuthPayload'

export const authenticate = async (
  email: string,
  pwd: string
): Promise<AuthenticateResponse> => {
  const user = await getUserWithCredentials(email, pwd)
  const payload = createPayload(user)
  const token = createToken(payload)

  return {
    token
  }
}

const getUserWithCredentials = async (email: String, pwd: String) => {
  const user = await models.userDBModel.getOneByFields({ email, pwd })
  if (user) {
    return user
  }

  throw new AuthenticationError()
}
