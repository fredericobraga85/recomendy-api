import { getMyProfile } from '../../src/services/getMyProfile/GetMyProfileUseCase'
import assert from 'assert'
import { User } from '../../src/model/user/User'
import { ROLES } from '../../src/database/mock'
import {
  connectDatabase,
  disconnectDatabase
} from '../../src/database/mongodb/MongoDB'
import { createUser } from '../../src/services/createUser/CreateUserUseCase'

describe('getMyProfile()', () => {
  before(async () => {
    await connectDatabase()
  })

  describe('user with id', async () => {
    let createUserResp

    before(async () => {
      createUserResp = await createUser(
        {
          roles: [ROLES.ADMIN]
        } as User,
        {
          firstName: 'firstName1',
          lastName: 'lastName1',
          avatarUrl: 'avatarUrl1',
          email: 'email1',
          roles: [ROLES.ADMIN],
          createdAt: Date(),
          updatedAt: Date()
        }
      )
    })

    it('should get his profile', async function() {
      const getMyProfileResponse = await getMyProfile(createUserResp.user)
      assert.equal(
        getMyProfileResponse.user.firstName,
        createUserResp.user.firstName
      )
      assert.equal(
        getMyProfileResponse.user.lastName,
        createUserResp.user.lastName
      )
      assert.equal(
        getMyProfileResponse.user.avatarUrl,
        createUserResp.user.avatarUrl
      )
      assert.deepEqual(
        getMyProfileResponse.user.roles,
        createUserResp.user.roles
      )
      assert.equal(
        getMyProfileResponse.user.createdAt,
        createUserResp.user.createdAt
      )
      assert.equal(
        getMyProfileResponse.user.updatedAt,
        createUserResp.user.updatedAt
      )
    })
  })

  after(async () => {
    await disconnectDatabase()
  })
})
