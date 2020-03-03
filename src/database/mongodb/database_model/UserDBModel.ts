import mongoose from 'mongoose'
import { User } from '../../../model/user/User'
import { IDataBaseModel } from '../../databaseModel'
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

  defineModel() {
    mongoose.model('user', this.userSchema)
  }

  map(model: any): User {
    return {
      id: model._id?.toString(),
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
    const userModel = mongoose.model('user')
    const rslt = await new userModel({ ...user }).save()
    return this.map(rslt)
  }

  async get(user: User): Promise<User> {
    const userModel = mongoose.model('user')
    const rslt = await userModel.findById(user.id).exec()
    return this.map(rslt)
  }
}
