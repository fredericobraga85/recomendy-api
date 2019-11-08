export const USER_TYPEDEF = `
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    avatarUrl: String
    roles: [Role]!
    createdAt: String
    updatedAt: String
}
`
