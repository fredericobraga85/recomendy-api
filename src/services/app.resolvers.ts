import * as authenticate from './authenticate/AuthenticateResolver'
import { IResolvers } from 'graphql-tools'

export const APP_RESOLVERS = [authenticate] as IResolvers[]
