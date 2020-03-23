import { Error } from './Error'

export class EmailAlreadyUsedError extends Error {
  constructor(details?: string) {
    super('E-mail already used', details)
  }
}
