export const HELLOWORLD_TYPEDEF = `
  type HelloWorldResponse implements ResponseBase {
    success: Boolean!
    message: String
    response: String
  }

  type Query {
    helloWorld(name:String): HelloWorldResponse
  }
`
