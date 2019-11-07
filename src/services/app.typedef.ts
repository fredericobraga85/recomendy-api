import { gql } from 'apollo-server-express'
import { USER_TYPEDEF } from '../model/user/user.typedef'
import { MODEL_BASE_TYPEDEF } from '../model/base/model_base.typedef'
import { ROLE_TYPEDEF } from '../model/role/role.typedef'
import { RESPONSE_BASE_TYPEDEF } from './base/response_base.typeDef'
import {
  AUTHENTICATE_TYPEDEF,
  AUTHENTICATE_MUTATION
} from './authenticate/authenticate.typeDef'
import {
  GETMYPROFILE_TYPEDEF,
  GETMYPROFILE_QUERY
} from './getMyProfile/getMyProfile.typedef'
import {
  HELLOWORLD_TYPEDEF,
  HELLOWORLD_QUERY
} from './helloWorld/helloWorld.typedef'

const TYPES = [
  MODEL_BASE_TYPEDEF,
  USER_TYPEDEF,
  ROLE_TYPEDEF,
  RESPONSE_BASE_TYPEDEF,
  HELLOWORLD_TYPEDEF,
  GETMYPROFILE_TYPEDEF,
  AUTHENTICATE_TYPEDEF
].join(' ')

const QUERIES = `type Query {
  ${[HELLOWORLD_QUERY, GETMYPROFILE_QUERY].join(' ')}
  }`

const MUTATIONS = `type Mutation {
  ${[AUTHENTICATE_MUTATION].join(' ')}
  }`

export const APP_TYPEDEF = gql([TYPES, QUERIES, MUTATIONS].join(' '))
