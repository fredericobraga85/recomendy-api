import { Error } from './Error'

export class PermissionError extends Error {
  constructor(error?: string) {
    super('User does not have access permission', error)
  }
}
