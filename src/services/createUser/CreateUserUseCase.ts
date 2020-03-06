import { CreateUserResponse } from './CreateUserResponse'
import { User } from '../../model/user/User'
import { models } from '../../database/databaseModel'
import { PERMISSION } from '../../database/mock'
import { validateRolePermission } from '../serviceUtils/permission'

export const createUser = async (
  sessionUser: User,
  userToCreate: User
): Promise<CreateUserResponse> => {
  validateRolePermission(sessionUser.roles, PERMISSION.CREATE_USER)
  const createdUser = await models.userDBModel.save(userToCreate)

  return {
    user: createdUser
  }
}
