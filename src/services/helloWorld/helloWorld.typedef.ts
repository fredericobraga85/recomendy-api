export const HELLOWORLD_TYPEDEF = `
  type HelloWorldResponse implements ResponseBase {
    success: Boolean!
    message: String
    response: String
  }
`

export const HELLOWORLD_QUERY = `
    helloWorld(name:String): HelloWorldResponse
`
