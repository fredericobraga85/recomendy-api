import { GetMyProfileResponse } from './GetMyProfileResponse'
import { models } from '../../database/databaseModel'
import { User } from '../../model/user/User'

export const getMyProfile = async (
  user: User
): Promise<GetMyProfileResponse> => {
  const userRetrieved = await models.userDBModel.getById(user.id, [
    'id',
    'firstName',
    'lastName',
    'email',
    'pwd',
    'avatarUrl'
  ])

  return {
    user: userRetrieved
  }
}
