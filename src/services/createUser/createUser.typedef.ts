export const CREATE_USER_TYPEDEF = `
  type CreateUserResponse {
    user: User
  }

  input CreateUserInput{
    firstName: String!
    lastName: String!
    email: String!
  }
`
export const CREATE_USER_MUTATION = `
    createUser(user:CreateUserInput): CreateUserResponse
`
