import {
  FETCH_RESPONSE_ERROR,
  FETCH_USERS,
  FETCH_ADMINS,
  FETCH_CURRENT_USER,
} from './types'

const hasResponseError = (dispatch, { error, data }) => {
  if (!error) {
    return false
  }

  dispatch({
    type: FETCH_RESPONSE_ERROR,
    payload: { error, data },
  })

  return true
}

export const fetchUsers = () => async (dispatch, getState, api) => {
  const response = await api.get('/users')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_USERS,
    payload: response,
  })
}

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const response = await api.get('/admins')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_ADMINS,
    payload: response,
  })
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/current_user')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: response,
  })
}
