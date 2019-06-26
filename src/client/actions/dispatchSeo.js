import { SEO } from '../action-types'

export default data => async (dispatch) => {
  await new Promise(resolve => setTimeout(resolve, 100))

  dispatch({
    type: SEO,
    payload: data,
  })
}
