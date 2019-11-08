import { verifyToken } from '../serviceUtils/tokenizer'
import { verifyRolePermission } from '../serviceUtils/authorizer'
import { PERMISSION } from '../../database/mock'
import { AuthPayload } from '../serviceUtils/AuthPayload'
import { PermissionError } from '../serviceUtils/errors/PermissionError'

export const validateGetMyProfilePermission = (token): AuthPayload => {
  const payload = verifyToken(token)

  if (verifyRolePermission(payload.user.roles, PERMISSION.GET_MY_PROFILE)) {
    return {
      ...payload
    }
  } else {
    throw new PermissionError()
  }
}
