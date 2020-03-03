export abstract class Error {
  constructor(message: string, details?: string) {
    this.message = message
    this.details = details
  }

  message: string
  details?: string
}
