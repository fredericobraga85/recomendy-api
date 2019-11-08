import { GetMyProfileResponse } from './GetMyProfileResponse'
import { validateRolePermission } from '../serviceUtils/permission'
import { PERMISSION } from '../../database/mock'

export const getMyProfile = (user): GetMyProfileResponse => {
  validateRolePermission(user.roles, PERMISSION.GET_MY_PROFILE)

  return {
    user: user
  }
}
