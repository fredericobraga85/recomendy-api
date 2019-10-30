export class Service {
  title: string
  action: {}
  resolver: () => {}

  constructor(title: string, action: {}, resolver: () => {}) {
    this.title = title
    this.action = action
    this.resolver = resolver
  }
}
