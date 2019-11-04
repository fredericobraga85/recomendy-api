import { HelloWorldResponse } from './HelloWorldResponse'

export const helloWorldResolver = {
  Query: {
    helloWorld: (_, { name }): HelloWorldResponse => {
      return {
        success: true,
        message: `you did it ${name}`,
        response: 'Hello World 123!'
      }
    }
  }
}
