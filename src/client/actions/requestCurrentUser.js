import hasResponseError from './hasResponseError'
import { FETCH_CURRENT_USER } from '../action-types'

export default () => async (dispatch, getState, api) => {
  const response = await api.get('/current_user')

  if (hasResponseError(dispatch, response)) {
    return
  }

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: response,
  })
}
