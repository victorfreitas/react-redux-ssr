import { combineReducers } from 'redux'

import admins from './admins'
import auth from './auth'
import currentUser from './currentUser'
import responseError from './responseError'
import seo from './seo'
import users from './users'

export default combineReducers({
  admins,
  auth,
  currentUser,
  responseError,
  seo,
  users,
})
