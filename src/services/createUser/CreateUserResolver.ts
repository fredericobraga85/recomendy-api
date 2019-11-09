import { createUser } from './CreateUserUseCase'
import { ApolloError } from 'apollo-server-core'

export const createUserResolver = (_, { user }) => {
  try {
    return createUser(user)
  } catch (e) {
    return new ApolloError(e)
  }
}
