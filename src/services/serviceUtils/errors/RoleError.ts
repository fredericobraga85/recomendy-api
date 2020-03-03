import { Error } from './Error'

export class RoleError extends Error {
  constructor() {
    super('Role does not exist')
  }
}
