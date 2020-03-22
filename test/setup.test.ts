import {
  connectTestDatabase,
  clearTestDatabase,
  disconnectTestDatabase
} from './helper'

before(async () => {
  await connectTestDatabase()
})

after(async () => {
  await clearTestDatabase()
  await disconnectTestDatabase()
})
