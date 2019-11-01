export interface IGraphqlService<T> {
  typeDef: String
  queryResolver?: String
  mutationResolver?: ({ _ }, { email, pwd }) => T
}
