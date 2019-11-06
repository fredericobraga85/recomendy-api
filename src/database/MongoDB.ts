import mongoose from 'mongoose'

export const connectDatabase = async () => {
  const url = 'mongodb://localhost:27017/recomendy_db'

  await mongoose.connect(url, { useNewUrlParser: true })
  const db_client = mongoose.connection
  db_client.on('error', console.error.bind(console, 'connection error:'))
  db_client.once('open', function() {
    console.log('Connected successfully to Mongo database')
  })
}
