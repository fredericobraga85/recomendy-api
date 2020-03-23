import { CreateUserResponse } from './CreateUserResponse'
import { User } from '../../model/user/User'
import { models } from '../../database/databaseModel'
import { EmailAlreadyUsedError } from '../serviceUtils/errors/EmailAlreadyUsedError'

export const createUser = async (
  userToCreate: User
): Promise<CreateUserResponse> => {
  if (await emailAlreadyUsed(userToCreate.email)) {
    throw new EmailAlreadyUsedError()
  }
  const createdUser = await models.userDBModel.save(userToCreate)

  return {
    user: createdUser
  }
}

const emailAlreadyUsed = async (email: string) => {
  const user = await models.userDBModel.getOneByFields({ email })
  return user
}
