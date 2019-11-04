import { HelloWorldResponse } from './HelloWorldResponse'

export const helloWorld = (name: String): HelloWorldResponse => {
  return {
    success: true,
    message: `you did it ${name}`,
    response: 'Hello World 123!'
  }
}
