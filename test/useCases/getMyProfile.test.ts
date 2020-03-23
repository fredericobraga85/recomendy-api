import { getMyProfile } from '../../src/services/getMyProfile/GetMyProfileUseCase'
import assert from 'assert'
import { getSession, getUserWithAdminrole } from '../helper'
import { UserNotFoundError } from '../../src/services/serviceUtils/errors/UserNotFoundError'

describe('getMyProfile()', () => {
  let userWithProfileSession

  describe('user with id', async () => {
    before(async () => {
      userWithProfileSession = await getSession(getUserWithAdminrole())
    })

    it('should get his profile details without password and metadata fields', async function() {
      const getMyProfileResponse = await getMyProfile(
        userWithProfileSession,
        userWithProfileSession.user.id
      )
      assert.equal(
        getMyProfileResponse.user.firstName,
        userWithProfileSession.user.firstName
      )
      assert.equal(
        getMyProfileResponse.user.lastName,
        userWithProfileSession.user.lastName
      )
      assert.equal(
        getMyProfileResponse.user.avatarUrl,
        userWithProfileSession.user.avatarUrl
      )
      assert.deepEqual(
        getMyProfileResponse.user.roles,
        userWithProfileSession.user.roles
      )
      assert.equal(getMyProfileResponse.user.pwd, undefined)
      assert.equal(getMyProfileResponse.user.createdAt, undefined)
      assert.equal(getMyProfileResponse.user.updatedAt, undefined)
    })
  })

  describe('user with different id', async () => {
    let userNotAllowedSession

    before(async () => {
      userNotAllowedSession = await getSession(getUserWithAdminrole())
    })

    it('should get "UserNotFound" error', async function() {
      await assert.rejects(async () => {
        await getMyProfile(
          userNotAllowedSession,
          userWithProfileSession.user.id
        )
      }, new UserNotFoundError())
    })
  })
})
