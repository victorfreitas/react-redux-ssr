import { combineReducers } from 'redux'

import users from './users'
import admins from './admins'
import auth from './auth'
import currentUser from './currentUser'
import responseError from './responseError'

export default combineReducers({
  users,
  admins,
  auth,
  responseError,
  currentUser,
})
