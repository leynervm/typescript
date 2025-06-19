import { AppDataSource } from './db/db'
import { createApp } from './app'

AppDataSource.initialize()
  .then(() => {
    console.log(`Connected to DB`)
    // here you can start to work with your database
  })
  .catch(error => console.log(error))
createApp()
