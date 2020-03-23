import {
  connectTestDatabase,
  clearTestDatabase,
  disconnectTestDatabase
} from './helper'

before(async () => {
  await connectTestDatabase()
})

afterEach(async () => {
  await clearTestDatabase()
})

after(async () => {
  await disconnectTestDatabase()
})
