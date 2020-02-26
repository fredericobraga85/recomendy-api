import { resolve } from 'path'
import { config } from 'dotenv'

let envFileName
switch (process.env.NODE_ENV) {
  case 'PROD': {
    envFileName = '.env.prod'
    break
  }
  case 'DEV': {
    envFileName = '.env.dev'
    break
  }
  case 'TEST': {
    envFileName = '.env.test'
    break
  }
  default: {
    envFileName = '.env.dev'
    break
  }
}
config({ path: resolve(__dirname, `../../${envFileName}`) })

export const env = {
  APP_PORT: process.env.APP_PORT,
  APP_DOMAIN: process.env.APP_DOMAIN,
  DB_NAME: process.env.DB_NAME,
  DB_DOMAIN: process.env.DB_DOMAIN,
  DB_PORT: process.env.DB_PORT,
  DB_USER_NAME: process.env.DB_USER_NAME,
  DB_USER_PWD: process.env.DB_USER_PWD
}
