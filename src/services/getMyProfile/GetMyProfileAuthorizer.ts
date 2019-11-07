import { verifyToken } from '../serviceUtils/tokenizer'
import { verifyRolePermission } from '../serviceUtils/authorizer'
import { PERMISSION } from '../../database/mock'
import { AuthPayload } from '../serviceUtils/AuthPayload'

export const validateGetMyProfilePermission = (token): AuthPayload => {
  const payload = verifyToken(token)
  return verifyRolePermission(payload.user.roles, PERMISSION.GET_MY_PROFILE)
    ? {
        success: true,
        ...payload
      }
    : {
        success: false,
        message: 'No access permission'
      }
}
