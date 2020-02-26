import {
  connectDatabase,
  disconnectDatabase,
  isConnected
} from '../../src/database/mongodb/MongoDB'
import assert from 'assert'

describe('Mongoose connection', function() {
  it('should connect with mongoDB', async function() {
    const isConnected = await connectDatabase()
    assert(isConnected)
  })

  it('should disconnect with mongoDB', async function() {
    await disconnectDatabase()
    assert(!isConnected())
  })
})
