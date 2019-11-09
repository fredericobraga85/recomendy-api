import { getMyProfileResolver as getMyProfile } from './getMyProfile/GetMyProfileResolver'
import { createUserResolver as createUser } from './createUser/CreateUserResolver'
import { authenticateResolver as authenticate } from './authenticate/AuthenticateResolver'
import { IResolvers } from 'graphql-tools'

export const APP_RESOLVERS = {
  Query: {
    getMyProfile
  },
  Mutation: {
    authenticate,
    createUser
  }
} as IResolvers
