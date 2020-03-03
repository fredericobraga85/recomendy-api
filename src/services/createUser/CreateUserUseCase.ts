import { CreateUserResponse } from './CreateUserResponse'
import { User } from '../../model/user/User'
import { getDataBaseModel } from '../../database/mongodb/database_model/databaseModel'
import { PERMISSION } from '../../database/mock'
import { validateRolePermission } from '../serviceUtils/permission'

export const createUser = async (
  userFromSession: User,
  userToCreate: User
): Promise<CreateUserResponse> => {
  validateRolePermission(userFromSession.roles, PERMISSION.CREATE_USER)

  const model = getDataBaseModel(userToCreate)
  const createdUser = await model.save(userToCreate)

  return {
    user: createdUser
  }
}
