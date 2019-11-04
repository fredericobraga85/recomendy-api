import { helloWorldResolver } from './helloWorld/HelloWorldResolver'
import { authenticateResolver } from './authenticate/AuthenticateResolver'
import { IResolvers } from 'graphql-tools'

export const APP_RESOLVERS = [
  helloWorldResolver,
  authenticateResolver
] as IResolvers[]
