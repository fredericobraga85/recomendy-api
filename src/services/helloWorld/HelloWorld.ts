import { Service } from '../Service'

export class HelloWorld extends Service {
  constructor() {
    super(
      'helloWorld',
      { helloWorld: (text: String) => 'testing 2 - ${text}' },
      () => 'Hello World!'
    )
  }
}
