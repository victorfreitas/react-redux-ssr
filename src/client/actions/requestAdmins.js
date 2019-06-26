import hasResponseError from './hasResponseError'
import { FETCH_ADMINS } from '../action-types'

export default () => async (dispatch, getState, api) => {
  const response = await api.get('/admins')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_ADMINS,
    payload: response,
  })
}
