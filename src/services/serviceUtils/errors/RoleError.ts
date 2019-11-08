import { Error } from './Error'

export class RoleError extends Error {
  constructor(message?: string) {
    super('Role does not exist', message)
  }
}
