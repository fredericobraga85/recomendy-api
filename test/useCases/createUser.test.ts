import { createUser } from '../../src/services/createUser/CreateUserUseCase'
import assert from 'assert'
import { getUserWithUserRole } from '../helper'
import { EmailAlreadyUsedError } from '../../src/services/serviceUtils/errors/EmailAlreadyUsedError'

describe('createUser()', () => {
  let userToCreate
  it('should create a new user', async function() {
    userToCreate = getUserWithUserRole({ email: 'email1' })

    const createdUserResponse = await createUser(userToCreate)
    assert.equal(createdUserResponse.user.firstName, userToCreate.firstName)
    assert.equal(createdUserResponse.user.lastName, userToCreate.lastName)
    assert.equal(createdUserResponse.user.avatarUrl, userToCreate.avatarUrl)
    assert.deepEqual(createdUserResponse.user.roles, userToCreate.roles)
    assert.equal(createdUserResponse.user.createdAt, userToCreate.createdAt)
    assert.equal(createdUserResponse.user.updatedAt, userToCreate.updatedAt)
  })

  it('should return "EmailAlreadyUsedError" when email already exists', async function() {
    const userWithEmail = getUserWithUserRole({ email: 'email1' })
    const userCreated = await createUser(userToCreate)

    const userWithSameEmail = getUserWithUserRole({ email: 'email1' })
    await assert.rejects(async () => {
      await createUser(userWithSameEmail)
    }, new EmailAlreadyUsedError())
  })
})
