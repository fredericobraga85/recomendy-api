import { USER_TYPEDEF } from '../model/user/user.typedef'
import { MODEL_BASE_TYPEDEF } from '../model/base/model_base.typedef'
import { ROLE_TYPEDEF } from '../model/role/role.typedef'
import { RESPONSE_BASE_TYPEDEF } from './base/response_base.typeDef'
import { gql } from 'apollo-server-express'
import { AUTHENTICATE_TYPEDEF } from './authenticate/authenticate.typeDef'
import { HELLOWORLD_TYPEDEF } from './helloWorld/helloWorld.typedef'

export const APP_TYPEDEF = [
  MODEL_BASE_TYPEDEF,
  USER_TYPEDEF,
  ROLE_TYPEDEF,
  RESPONSE_BASE_TYPEDEF,
  HELLOWORLD_TYPEDEF,
  AUTHENTICATE_TYPEDEF
].join(' ')
