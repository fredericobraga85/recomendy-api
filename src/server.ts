import express from 'express'
import { connectDatabase } from './database/MongoDB'
import { ApolloServer } from 'apollo-server-express'
import { APP_TYPEDEF as typeDefs } from './services/app.typedef'
import { APP_RESOLVERS as resolvers } from './services/app.resolvers'
import { getPayloadFromToken } from './services/serviceUtils/tokenizer'

connectDatabase()

const PORT = 4000
const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      payload: getPayloadFromToken(req.headers['authorization'])
    }
  }
})
server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
