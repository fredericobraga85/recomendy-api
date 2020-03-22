import { createUser } from '../../src/services/createUser/CreateUserUseCase'
import assert from 'assert'
import { getUserWithUserRole } from '../helper'

describe('createUser()', () => {
  it('should create a new user', async function() {
    const userToCreate = getUserWithUserRole({ pwd: 'pwd1' })

    const createdUserResponse = await createUser(userToCreate)
    assert.equal(createdUserResponse.user.firstName, userToCreate.firstName)
    assert.equal(createdUserResponse.user.lastName, userToCreate.lastName)
    assert.equal(createdUserResponse.user.avatarUrl, userToCreate.avatarUrl)
    assert.deepEqual(createdUserResponse.user.roles, userToCreate.roles)
    assert.equal(createdUserResponse.user.createdAt, userToCreate.createdAt)
    assert.equal(createdUserResponse.user.updatedAt, userToCreate.updatedAt)
  })
})
