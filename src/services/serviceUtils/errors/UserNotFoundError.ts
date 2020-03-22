import { Error } from './Error'

export class UserNotFoundError extends Error {
  constructor(details?: string) {
    super('User not found', details)
  }
}
