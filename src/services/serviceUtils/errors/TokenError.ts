import { Error } from './Error'

export class TokenError extends Error {
  constructor(error?: string) {
    super('Error with token', error)
  }
}
