import { FETCH_RESPONSE_ERROR } from '../action-types'

export default (dispatch, { error, data }) => {
  if (!error) {
    return false
  }

  dispatch({
    type: FETCH_RESPONSE_ERROR,
    payload: { error, data },
  })

  return true
}
