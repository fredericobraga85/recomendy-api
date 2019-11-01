export const USER_TYPEDEF = `
  type User implements ModelBase {
    firstName: String!
    surName: String!
    email: String!
    avatarUrl: String!
    roles: [Role]!
}
`
