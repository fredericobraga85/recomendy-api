import mongoose from 'mongoose'

export const connectDatabase = async () => {
  const url = 'mongodb://localhost:27017/'

  mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:')
  )
  mongoose.connection.once('open', function() {
    console.log('Connected successfully to Mongo database')
  })
  await mongoose.connect(url, {
    useNewUrlParser: true,
    dbName: 'recomendy_db',
    auth: {
      user: 'admin',
      password: 'admin'
    }
  })
}
