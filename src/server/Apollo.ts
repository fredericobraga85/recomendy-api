import * as express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { Authenticate } from '../services/authenticate/Authenticate'
import { Service } from '../services/Service'
import { HelloWorld } from '../services/helloWorld/HelloWorld'

export class Apollo {
  constructor(port = 4000) {
    const app = express()

    const queryList: Service[] = [new HelloWorld()]
    const mutationList: Service[] = [new Authenticate()]

    const typeDefs = gql`
      type Query {
         ${queryList.map(service => service.action).join()}
      }
      type Mutation {
        ${mutationList.map(service => service.action).join()}
      }
    `

    const resolvers = {
      Query: {},
      Mutation: {}
    }
    queryList.map(
      service => (resolvers.Query[service.title] = service.resolver)
    )
    mutationList.map(
      service => (resolvers.Mutation[service.title] = service.resolver)
    )

    const server = new ApolloServer({ typeDefs, resolvers })
    server.applyMiddleware({ app })

    app.listen({ port: port }, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      )
    )
  }
}
