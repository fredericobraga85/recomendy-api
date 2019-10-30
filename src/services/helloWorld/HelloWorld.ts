import { Service } from '../Service'

export class HelloWorld implements Service {
  title = 'helloWorld'
  action = 'helloWorld(text: String): String'
  resolver = (_, { text }) => `Hello ${text}!`
}
