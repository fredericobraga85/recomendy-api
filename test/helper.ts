import { User } from '../src/model/user/User'

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
    email: 'email1',
    roles: ['USER'],
    createdAt: Date(),
    updatedAt: Date(),
    ...user
  } as User
}

export const getUserWithAdminrole = (user?: any) => {
  return getUserWithUserRole({ roles: ['ADMIN'], ...user })
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
