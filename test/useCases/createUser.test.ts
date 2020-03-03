import { createUser } from '../../src/services/createUser/CreateUserUseCase'
import assert from 'assert'
import { User } from '../../src/model/user/User'
import { ROLES } from '../../src/database/mock'
import {
  connectDatabase,
  disconnectDatabase
} from '../../src/database/mongodb/MongoDB'
import { PermissionError } from '../../src/services/serviceUtils/errors/PermissionError'
import { RoleError } from '../../src/services/serviceUtils/errors/RoleError'

describe('createUser()', () => {
  before(() => {
    connectDatabase()
  })

  describe('by an ADMIN role', async () => {
    const userWithAdminRole = {
      roles: [ROLES.ADMIN]
    } as User

    it('should create a new user', async function() {
      const userToCreate = {
        firstName: 'firstName1',
        lastName: 'lastName1',
        avatarUrl: 'avatarUrl1',
        email: 'email1',
        roles: [ROLES.USER],
        createdAt: Date(),
        updatedAt: Date()
      } as User

      const createdUserResponse = await createUser(
        userWithAdminRole,
        userToCreate
      )
      assert.equal(createdUserResponse.user.firstName, userToCreate.firstName)
      assert.equal(createdUserResponse.user.lastName, userToCreate.lastName)
      assert.equal(createdUserResponse.user.avatarUrl, userToCreate.avatarUrl)
      assert.deepEqual(createdUserResponse.user.roles, userToCreate.roles)
      assert.equal(createdUserResponse.user.createdAt, userToCreate.createdAt)
      assert.equal(createdUserResponse.user.updatedAt, userToCreate.updatedAt)
    })
  })

  describe('by a USER role', async () => {
    const userWithUserRole = {
      roles: [ROLES.USER]
    } as User

    it('should cause a Permission error', async function() {
      const userToCreate = {
        firstName: 'firstName1',
        lastName: 'lastName1',
        avatarUrl: 'avatarUrl1',
        email: 'email1',
        roles: ['USER'],
        createdAt: Date(),
        updatedAt: Date()
      } as User

      await assert.rejects(async () => {
        await createUser(userWithUserRole, userToCreate)
      }, new PermissionError())
    })
  })

  describe('by an INVALID role', () => {
    const userWithInvalidRole = {
      roles: [ROLES.INVALID]
    } as User

    it('should cause a Role error', async function() {
      const userToCreate = {
        firstName: 'firstName1',
        lastName: 'lastName1',
        avatarUrl: 'avatarUrl1',
        email: 'email1',
        roles: ['USER'],
        createdAt: Date(),
        updatedAt: Date()
      } as User

      await assert.rejects(async () => {
        await createUser(userWithInvalidRole, userToCreate)
      }, new RoleError())
    })
  })

  describe('by an empty role', () => {
    const userWithInvalidRole = {
      roles: []
    } as User

    it('should cause a Permission error', async function() {
      const userToCreate = {
        firstName: 'firstName1',
        lastName: 'lastName1',
        avatarUrl: 'avatarUrl1',
        email: 'email1',
        roles: ['USER'],
        createdAt: Date(),
        updatedAt: Date()
      } as User

      await assert.rejects(async () => {
        await createUser(userWithInvalidRole, userToCreate)
      }, new PermissionError())
    })
  })

  after(() => {
    disconnectDatabase()
  })
})
