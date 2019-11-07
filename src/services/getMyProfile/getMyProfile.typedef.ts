export const GETMYPROFILE_TYPEDEF = `
  type GetMyProfileResponse implements ResponseBase {
    success: Boolean!
    message: String
    user: User
  }
`
export const GETMYPROFILE_QUERY = `
    getMyProfile: GetMyProfileResponse
`
