import { authenticate } from './AuthenticateUseCase'
import { ApolloError } from 'apollo-server-core'

export const authenticateResolver = (_, { email, pwd }) => {
  try {
    return authenticate(email, pwd)
  } catch (e) {
    return new ApolloError(e)
  }
}
