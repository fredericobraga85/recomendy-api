import { Error } from './Error'

export class AuthenticationError extends Error {
  constructor() {
    super('Invalid credentials')
  }
}
