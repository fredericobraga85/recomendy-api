import { UserDBModel } from './mongodb/database_model/UserDBModel'
import { User } from '../model/user/User'
import { log } from '../lib/logger'

let models

export interface IDataBaseModel<T> {
  defineModel()
  map(model: any): T
  save(model: T): Promise<T>
  get(model: T): Promise<T>
}

export const initDatabaseModels = () => {
  models = {
    userDBModel: new UserDBModel()
  }

  Object.keys(models).map(key => {
    try {
      log(`defining Model for ${key}`)
      models[key].defineModel()
    } catch (e) {
      log(`Error for ${key}: ${e}`)
    }
  })
}

export const getDataBaseModel = (model): IDataBaseModel<any> => {
  if (model as User) {
    return models.userDBModel
  } else {
    throw new Error('tilt')
  }
}
