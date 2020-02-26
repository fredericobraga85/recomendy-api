import {
  sum,
  createUser
} from '../../src/services/createUser/CreateUserUseCase'
import assert from 'assert'
import { User } from '../../src/model/user/User'
import {
  connectDatabase,
  disconnectDatabase
} from '../../src/database/mongodb/MongoDB'

describe('createUser()', () => {
  before(() => {
    connectDatabase()
  })
  it('should create a new user', async function() {
    const user = {
      firstName: 'firstName1',
      lastName: 'lastName1',
      avatarUrl: 'avatarUrl1',
      email: 'email1',
      roles: ['USER'],
      createdAt: Date(),
      updatedAt: Date()
    } as User

    const createdUserResponse = await createUser(user)
    assert.equal(createdUserResponse.user.firstName, user.firstName)
    assert.equal(createdUserResponse.user.lastName, user.lastName)
    assert.equal(createdUserResponse.user.avatarUrl, user.avatarUrl)
    assert.deepEqual(createdUserResponse.user.roles, user.roles)
    assert.equal(createdUserResponse.user.createdAt, user.createdAt)
    assert.equal(createdUserResponse.user.updatedAt, user.updatedAt)
  })

  after(() => {
    disconnectDatabase()
  })
})
