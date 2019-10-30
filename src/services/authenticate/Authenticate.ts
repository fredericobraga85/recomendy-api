import { Service } from '../Service'
import { resolve } from 'url'

export class Authenticate extends Service {
  constructor() {
    super('authenticate', () => 'testing', () => 'Here is your token 22eeeqq')
  }
}
