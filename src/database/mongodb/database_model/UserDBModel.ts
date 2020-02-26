import mongoose from 'mongoose'
import { User } from '../../../model/user/User'
import { IDataBaseModel } from './databaseModel'
import { ROLES } from '../../mock'

export class UserDBModel implements IDataBaseModel<User> {
  userSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: String,
    avatarUrl: String,
    createdAt: String,
    updatedAt: String
  })

  map(model: any): User {
    return {
      id: model.id?.toString(),
      firstName: model.firstName.toString(),
      lastName: model.lastName.toString(),
      email: model.email.toString(),
      avatarUrl: model.avatarUrl.toString(),
      roles: [ROLES.USER],
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    }
  }

  async save(user: User): Promise<User> {
    const model = new (mongoose.model('user', this.userSchema))({ ...user })
    const rslt = await model.save()
    return this.map(rslt)
  }
}
