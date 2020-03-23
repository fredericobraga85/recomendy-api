import { GetMyProfileResponse } from './GetMyProfileResponse'
import { models } from '../../database/databaseModel'
import { Session } from '../../model/session/Session'
import { UserNotFoundError } from '../serviceUtils/errors/UserNotFoundError'

export const getMyProfile = async (
  session: Session,
  userId: string
): Promise<GetMyProfileResponse> => {
  let userRetrieved

  if (session.user.id === userId) {
    userRetrieved = await models.userDBModel.getById(userId, [
      'id',
      'firstName',
      'lastName',
      'email',
      'avatarUrl'
    ])
  } else {
    throw new UserNotFoundError()
  }

  return {
    user: userRetrieved
  }
}
