import { getMyProfile } from '../../src/services/getMyProfile/GetMyProfileUseCase'
import assert from 'assert'
import { createUser } from '../../src/services/createUser/CreateUserUseCase'
import { getUserWithAdminrole } from '../helper'

describe('getMyProfile()', () => {
  describe('user with id', async () => {
    let createUserResp

    before(async () => {
      createUserResp = await createUser(getUserWithAdminrole())
    })

    it('should get his profile without password and metadata fields', async function() {
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
      assert.equal(getMyProfileResponse.user.pwd, undefined)
      assert.equal(getMyProfileResponse.user.createdAt, undefined)
      assert.equal(getMyProfileResponse.user.updatedAt, undefined)
    })
  })
})
