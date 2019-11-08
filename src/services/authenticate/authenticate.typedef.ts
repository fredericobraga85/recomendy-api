export const AUTHENTICATE_TYPEDEF = `
  type AuthenticateResponse {
    token: String
  }
`
export const AUTHENTICATE_MUTATION = `
    authenticate (email: String!, pwd: String!): AuthenticateResponse
`
