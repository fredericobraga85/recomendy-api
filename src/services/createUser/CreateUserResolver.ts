import { createUser } from './CreateUserUseCase'
import { ApolloError } from 'apollo-server-core'
import { getPayloadFromToken } from '../serviceUtils/tokenizer'

export const createUserResolver = (_, { userToCreate }, context) => {
  try {
    const payload = getPayloadFromToken(context.authToken)
    return createUser(payload.user, userToCreate)
  } catch (e) {
    return new ApolloError(e)
  }
}
