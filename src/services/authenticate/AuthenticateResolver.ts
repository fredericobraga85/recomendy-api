import { AuthenticateResponse } from './AuthenticateResponse'

export const authenticateResolver = {
  Mutation: {
    authenticate: (_, { email, pwd }): AuthenticateResponse => {
      return {
        success: true,
        message: `you did it`,
        token: `this is my token: ${pwd}`,
        user: {
          id: 'myId',
          firstName: 'Fred',
          surName: 'Braga',
          email: email,
          avatarUrl: '',
          roles: [
            {
              id: 'role id',
              name: 'Admin',
              desc: 'use it all'
            }
          ]
        }
      }
    }
  }
}
