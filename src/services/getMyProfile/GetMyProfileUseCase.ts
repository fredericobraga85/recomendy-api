import { GetMyProfileResponse } from './GetMyProfileResponse'
import { validateGetMyProfilePermission } from './GetMyProfileAuthorizer'

export const getMyProfile = (token): GetMyProfileResponse => {
  const payload = validateGetMyProfilePermission(token)

  return {
    user: payload.user,
    success: payload.success,
    message: payload.message
  }
}
