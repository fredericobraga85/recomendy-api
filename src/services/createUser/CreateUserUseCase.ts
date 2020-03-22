import { CreateUserResponse } from './CreateUserResponse'
import { User } from '../../model/user/User'
import { models } from '../../database/databaseModel'

export const createUser = async (
  userToCreate: User
): Promise<CreateUserResponse> => {
  const createdUser = await models.userDBModel.save(userToCreate)

  return {
    user: createdUser
  }
}
