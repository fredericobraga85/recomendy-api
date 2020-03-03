import { Error } from './Error'

export class PermissionError extends Error {
  constructor() {
    super('User does not have access permission')
  }
}
