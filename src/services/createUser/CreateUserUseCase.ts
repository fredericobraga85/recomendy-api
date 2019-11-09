import { CreateUserResponse } from './CreateUserResponse'
import { User } from '../../model/user/User'
import { getDataBaseModel } from '../../database/mongodb/database_model/databaseModel'

export const createUser = async (user: User): Promise<CreateUserResponse> => {
  const model = getDataBaseModel(user)
  const createdUser = await model.save(user)

  return {
    user: createdUser
  }
}
