import { Service } from '../Service'

export class Authenticate implements Service {
  title = 'authenticate'
  action = 'authenticate: String'
  resolver = () => 'Here is your token 22eeeqq'
}
