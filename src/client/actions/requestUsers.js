import hasResponseError from './hasResponseError'
import { FETCH_USERS } from '../action-types'

export default () => async (dispatch, getState, api) => {
  const response = await api.get('/users')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_USERS,
    payload: response,
  })
}
