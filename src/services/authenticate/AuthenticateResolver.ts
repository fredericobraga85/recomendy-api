import { authenticate } from './AuthenticateUseCase'

export const authenticateResolver = (_, { email, pwd }) => {
  return authenticate(email, pwd)
}
