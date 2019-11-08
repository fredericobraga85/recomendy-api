import { getMyProfile } from './GetMyProfileUseCase'
import { ApolloError } from 'apollo-server-core'
import { getPayloadFromToken } from '../serviceUtils/tokenizer'

export const getMyProfileResolver = (_, __, context) => {
  try {
    const payload = getPayloadFromToken(context.authToken)
    return getMyProfile(payload.user)
  } catch (e) {
    return new ApolloError(e.errors)
  }
}
