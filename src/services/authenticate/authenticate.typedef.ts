export const AUTHENTICATE_TYPEDEF = `
  type AuthenticateResponse implements ResponseBase {
    success: Boolean!
    message: String
    user: User
    token: String
  }
`
export const AUTHENTICATE_MUTATION = `
    authenticate (email: String!, pwd: String!): AuthenticateResponse
`
