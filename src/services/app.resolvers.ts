import { helloWorldResolver as helloWorld } from './helloWorld/HelloWorldResolver'
import { authenticateResolver as authenticate } from './authenticate/AuthenticateResolver'
import { IResolvers } from 'graphql-tools'

export const APP_RESOLVERS = {
  Query: {
    helloWorld
  },
  Mutation: {
    authenticate
  }
} as IResolvers
