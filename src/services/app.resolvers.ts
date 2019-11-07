import { helloWorldResolver as helloWorld } from './helloWorld/HelloWorldResolver'
import { getMyProfileResolver as getMyProfile } from './getMyProfile/GetMyProfileResolver'
import { authenticateResolver as authenticate } from './authenticate/AuthenticateResolver'
import { IResolvers } from 'graphql-tools'

export const APP_RESOLVERS = {
  Query: {
    helloWorld,
    getMyProfile
  },
  Mutation: {
    authenticate
  }
} as IResolvers
