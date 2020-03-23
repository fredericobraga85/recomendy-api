import assert from 'assert'
import { ROLES } from '../../src/database/mock'
import { createUser } from '../../src/services/createUser/CreateUserUseCase'
import { authenticate } from '../../src/services/authenticate/AuthenticateUseCase'
import { createPayload } from '../../src/services/serviceUtils/AuthPayload'
import { createToken } from '../../src/services/serviceUtils/tokenizer'
import { AuthenticationError } from '../../src/services/serviceUtils/errors/AuthenticationError'

describe('authenticate()', () => {
  describe('for registered user', async () => {
    before(async () => {})

    it('should get jwt auth token when sending valid email/pwd', async function() {
      const createUserResp = await createUser({
        firstName: 'firstName1',
        lastName: 'lastName1',
        avatarUrl: 'avatarUrl1',
        email: 'validEmail1',
        pwd: 'validPwd1',
        roles: [ROLES.ADMIN],
        createdAt: Date(),
        updatedAt: Date()
      })
      const authenticateResponse = await authenticate(
        'validEmail1',
        'validPwd1'
      )
      const payload = createPayload(createUserResp.user)
      const token = createToken(payload)

      assert.equal(authenticateResponse.token, token)
    })
  })

  describe('for unregistered user', async () => {
    it('should cause an Authentication error', async function() {
      await assert.rejects(async () => {
        await authenticate('invalidEmail', 'invalidPwd')
      }, new AuthenticationError())
    })
  })
})
