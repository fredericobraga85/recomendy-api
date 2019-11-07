import { getMyProfile } from './GetMyProfileUseCase'

export const getMyProfileResolver = (root, {}, context) => {
  console.log(context)
  const token = context.token || ''
  return getMyProfile(token)
}
