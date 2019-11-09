import { UserDBModel } from './UserDBModel'
import { User } from '../../../model/user/User'

export interface IDataBaseModel<T> {
  map(model: any): T
  save(model: T): Promise<T>
}

export const getDataBaseModel = (model): IDataBaseModel<any> => {
  if (model as User) {
    return new UserDBModel()
  } else {
    throw new Error('tilt')
  }
}
