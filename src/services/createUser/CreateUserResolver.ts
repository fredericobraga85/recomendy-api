import { createUser } from './CreateUserUseCase'
import { ApolloError } from 'apollo-server-core'

export const createUserResolver = (_, { userToCreate }, context) => {
  try {
    return createUser(userToCreate)
  } catch (e) {
    return new ApolloError(e)
  }
}
