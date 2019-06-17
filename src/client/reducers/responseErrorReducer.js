import { FETCH_RESPONSE_ERROR } from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_RESPONSE_ERROR:
      return action.payload

    default:
      return state
  }
}
