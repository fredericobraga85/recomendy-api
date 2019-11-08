export abstract class Error {
  constructor(...errors: string[]) {
    this.errors = errors.filter(e => e)
  }

  errors: string[]
}
