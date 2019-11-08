import { getMyProfile } from './GetMyProfileUseCase'
import { ApolloError } from 'apollo-server-core'

export const getMyProfileResolver = (_, __, context) => {
  try {
    return getMyProfile(context.authToken)
  } catch (e) {
    return new ApolloError(e.errors)
  }
}
