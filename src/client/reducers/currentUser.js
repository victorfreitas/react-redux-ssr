import { FETCH_CURRENT_USER } from '../action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || {}

    default:
      return state
  }
}
