import { ROLES, USER_PERMISSION, ADMIN_PERMISSION } from '../../database/mock'
import { RoleError } from './errors/RoleError'

export const verifyRolePermission = (userRoles: any[], permission) => {
  return userRoles.some(role => {
    switch (role) {
      case ROLES.USER: {
        return USER_PERMISSION.includes(permission)
      }
      case ROLES.ADMIN: {
        return ADMIN_PERMISSION.includes[permission]
      }
      default: {
        throw new RoleError()
      }
    }
  })
}
