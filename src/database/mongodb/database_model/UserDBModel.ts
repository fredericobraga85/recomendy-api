import mongoose from 'mongoose'
import { User } from '../../../model/user/User'
import { IDataBaseModel } from '../../databaseModel'
import { ROLES } from '../../mock'

export class UserDBModel implements IDataBaseModel<User> {
  userSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    avatarUrl: String,
    createdAt: String,
    updatedAt: String
  })

  defineModel() {
    mongoose.model('user', this.userSchema)
  }

  mapOrNull(model: any): User | null {
    if (model) {
      return {
        id: model._id?.toString(),
        firstName: model.firstName?.toString(),
        lastName: model.lastName?.toString(),
        email: model.email?.toString(),
        pwd: model.pwd?.toString(),
        avatarUrl: model.avatarUrl?.toString(),
        roles: [ROLES.USER],
        createdAt: model.createdAt,
        updatedAt: model.updatedAt
      }
    }

    return null
  }

  async save(user: User): Promise<User | null> {
    const userModel = mongoose.model('user')
    const rslt = await new userModel({ ...user }).save()
    return this.mapOrNull(rslt)
  }

  async getById(id: String, fields?: String[]): Promise<User | null> {
    const userModel = mongoose.model('user')
    let rslt
    if (fields) {
      rslt = await userModel.findById(id, fields.join(' ')).exec()
    } else {
      rslt = await userModel.findById(id).exec()
    }

    return this.mapOrNull(rslt)
  }

  async getOneByFields(fields: any): Promise<User | null> {
    const userModel = mongoose.model('user')
    const rslt = await userModel.findOne(fields).exec()
    return this.mapOrNull(rslt)
  }
}
