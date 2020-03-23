import { User } from '../src/model/user/User'
import { Session } from '../src/model/session/Session'
import { models } from '../src/database/databaseModel'

import {
  connectDatabase,
  disconnectDatabase,
  clearDatabase
} from '../src/database/mongodb/MongoDB'

export const getUserWithUserRole = (user?: any) => {
  return {
    firstName: 'firstName1',
    lastName: 'lastName1',
    avatarUrl: 'avatarUrl1',
    email: `email_${Math.floor(Math.random() * 10000)}_${new Date().getTime()}`,
    pwd: 'pwd1',
    roles: ['USER'],
    createdAt: Date(),
    updatedAt: Date(),
    ...user
  } as User
}

export const getUserWithAdminrole = (user?: any) => {
  return getUserWithUserRole({ roles: ['ADMIN'], ...user })
}

export const getSession = async (user?: any) => {
  const createdUser = await models.userDBModel.save(user)

  return {
    user: createdUser
  } as Session
}

export const connectTestDatabase = async () => {
  const isConnected = await connectDatabase()
}

export const disconnectTestDatabase = async () => {
  const isConnected = await disconnectDatabase()
}

export const clearTestDatabase = async () => {
  await clearDatabase()
}
