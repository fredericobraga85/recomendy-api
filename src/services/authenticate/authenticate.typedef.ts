export const AUTHENTICATE_TYPEDEF = `
  type AuthenticateResponse implements ResponseBase {
    success: Boolean!
    message: String
    user: User
    token: String
  }

  type Mutation {
    authenticate (email: String!, pwd: String!): AuthenticateResponse
  }
`
