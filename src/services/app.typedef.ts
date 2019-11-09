import { gql } from 'apollo-server-express'
import { USER_TYPEDEF } from '../model/user/user.typedef'
import { ROLE_TYPEDEF } from '../model/role/role.typedef'
import { PERMISSION_TYPEDEF } from '../model/permission/permission.typedef'
import {
  CREATE_USER_TYPEDEF,
  CREATE_USER_MUTATION
} from './createUser/createUser.typedef'
import {
  AUTHENTICATE_TYPEDEF,
  AUTHENTICATE_MUTATION
} from './authenticate/authenticate.typedef'
import {
  GETMYPROFILE_TYPEDEF,
  GETMYPROFILE_QUERY
} from './getMyProfile/getMyProfile.typedef'

const TYPES = [
  USER_TYPEDEF,
  ROLE_TYPEDEF,
  PERMISSION_TYPEDEF,
  GETMYPROFILE_TYPEDEF,
  CREATE_USER_TYPEDEF,
  AUTHENTICATE_TYPEDEF
].join(' ')

const QUERIES = `type Query {
  ${[GETMYPROFILE_QUERY].join(' ')}
  }`

const MUTATIONS = `type Mutation {
  ${[CREATE_USER_MUTATION, AUTHENTICATE_MUTATION].join(' ')}
  }`

export const APP_TYPEDEF = gql([TYPES, QUERIES, MUTATIONS].join(' '))
