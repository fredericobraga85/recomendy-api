import { env } from './lib/env'
import express from 'express'
import { connectDatabase } from './database/mongodb/MongoDB'
import { ApolloServer } from 'apollo-server-express'
import { APP_TYPEDEF as typeDefs } from './services/app.typedef'
import { APP_RESOLVERS as resolvers } from './services/app.resolvers'

connectDatabase()
const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      authToken: req.headers['authorization']
    }
  }
})
server.applyMiddleware({ app })

app.listen({ port: env.APP_PORT }, () =>
  console.log(
    `🚀 Server ready at http://${env.APP_DOMAIN}:${env.APP_PORT}${server.graphqlPath}`
  )
)
