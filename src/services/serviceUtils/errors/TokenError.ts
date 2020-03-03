import { Error } from './Error'

export class TokenError extends Error {
  constructor(details?: string) {
    super('Error with token', details)
  }
}
