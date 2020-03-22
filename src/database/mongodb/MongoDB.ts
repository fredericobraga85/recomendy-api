import { env } from '../../lib/env'
import mongoose, { Mongoose } from 'mongoose'
import { initDatabaseModels } from '../databaseModel'

let connection: Mongoose

export const connectDatabase = async () => {
  const url = `mongodb://${env.DB_DOMAIN}:${env.DB_PORT}/`

  mongoose.connection.once('open', function() {
    console.log(`Mongoose connected to ${env.DB_NAME} at ${url}`)
    initDatabaseModels()
  })
  mongoose.connection.on('disconnected', function() {
    console.log(`Mongoose disconnected to ${env.DB_NAME} at ${url}`)
    connection = null
  })
  mongoose.connection.on('reconnected', function() {
    console.log(`Mongoose reconnected to ${env.DB_NAME} at ${url}`)
  })
  mongoose.connection.on('error', function() {
    ;`Mongoose connection error in ${env.DB_NAME} at ${url}`
  })
  connection = await mongoose.connect(url, {
    useNewUrlParser: true,
    dbName: env.DB_NAME,
    auth: {
      user: env.DB_USER_NAME,
      password: env.DB_USER_PWD
    }
  })

  return isConnected()
}

export const disconnectDatabase = async () => {
  if (connection) {
    await connection.disconnect()
  }
}

export const isConnected = () => {
  if (connection) {
    return connection.connections.length > 0
  }

  return false
}

export const clearDatabase = async () => {
  if (connection) {
    await connection.connection.db.dropDatabase()
  }
}
