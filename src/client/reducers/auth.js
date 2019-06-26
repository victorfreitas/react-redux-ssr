import { FETCH_CURRENT_USER } from '../action-types'

export default (state = 0, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false

    default:
      return state
  }
}
