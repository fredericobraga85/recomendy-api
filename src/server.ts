import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import * as express_jwt from 'express-jwt'
import * as jwt from 'jsonwebtoken'
import * as bodyParser from 'body-parser'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello :String
    getFriends: [User]
  }

  type Mutation{
    authenticate(email:String!, password:String!) : Authentication!
  }

  type Authentication{
    user:User,
    token:String,
    error:Error
  }

  type User{
    email:String!
    name:String!
  }

  type Error{
    type: String,
    message: String
  }
`)
class User {
  email: String
  name: String
  password: String
}

class Authentication {
  user: User
  token: String
  authenticated: Boolean
  error: Error
}

class Error {
  type: String
  message: String
}

const user = new User()
user.email = 'fred@fred.com'
user.name = 'Frederico Braga'
user.password = '123'

const friend = new User()
friend.email = 'dede@dede.com'
friend.name = 'Debora Vaz'
friend.password = '321'

const friends = [friend]

const root = {
  hello: () => 'Hello world 1222',
  getFriends: () => {
    return friends
  },
  authenticate: ({ email, password }) => {}
}
const app = express()

app.use(
  '/graphql',
  // express_jwt({ secret: 'your jwt secret' }),
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/login', (req, res) => {
  const authentication = new Authentication()
  if (req.body.email === user.email && req.body.password === user.password) {
    authentication.token = jwt.sign(
      {
        id: 1
      },
      'your jwt secret',
      { expiresIn: 60 * 60 }
    )
    return res.json(authentication)
  } else {
    const error = new Error()
    error.type = 'AuthenticationError'
    error.message = 'email/password invalid'
    authentication.error = error
  }

  return res.status(401).json(authentication)
})
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
