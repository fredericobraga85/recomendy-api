export const USER_TYPEDEF = `
  type User implements ModelBase {
    id: ID!
    createdAt: String
    updatedAt: String
    firstName: String!
    surName: String!
    email: String!
    avatarUrl: String!
    roles: [Role]!
}
`
