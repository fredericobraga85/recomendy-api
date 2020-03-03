export enum PERMISSION {
  CREATE_USER = 'CREATE_USER',
  GET_MY_PROFILE = 'GET_MY_PROFILE'
}

export enum ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN',
  INVALID = 'INVALID'
}

export const USER_PERMISSION = [PERMISSION.GET_MY_PROFILE]
export const ADMIN_PERMISSION = [PERMISSION.CREATE_USER]
