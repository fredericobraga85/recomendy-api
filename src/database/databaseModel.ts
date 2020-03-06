import { UserDBModel } from './mongodb/database_model/UserDBModel'
import { User } from '../model/user/User'
import { log } from '../lib/logger'

export const models = {
  userDBModel: new UserDBModel()
}

export interface IDataBaseModel<T> {
  defineModel()
  mapOrNull(model: any): T | null
  save(model: T): Promise<T | null>
  getById(id: String): Promise<T | null>
}

export const initDatabaseModels = () => {
  Object.keys(models).map(key => {
    try {
      log(`defining Model for ${key}`)
      models[key].defineModel()
    } catch (e) {
      log(`Error for ${key}: ${e}`)
    }
  })
}
