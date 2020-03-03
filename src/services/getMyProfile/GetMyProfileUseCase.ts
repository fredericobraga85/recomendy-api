import { GetMyProfileResponse } from './GetMyProfileResponse'
import { validateRolePermission } from '../serviceUtils/permission'
import { getDataBaseModel } from '../../database/databaseModel'
import { PERMISSION } from '../../database/mock'
import { User } from '../../model/user/User'

export const getMyProfile = async (
  user: User
): Promise<GetMyProfileResponse> => {
  const model = getDataBaseModel(user)
  const userRetrieved = await model.get(user)

  return {
    user: userRetrieved
  }
}
