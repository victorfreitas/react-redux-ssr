import { SEO } from '../action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case SEO:
      return action.payload

    default:
      return state
  }
}
