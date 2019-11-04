import { helloWorld } from './HelloWorldUseCase'

export const helloWorldResolver = (_, { name }) => {
  return helloWorld(name)
}
