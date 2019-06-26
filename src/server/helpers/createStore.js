import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import axiosInstance from './axiosInstance'
import reducers from '../../client/reducers'

export default (req) => {
  const axios = axiosInstance({
    cookie: req.get('cookie') || '',
  })

  axios.interceptors.response.use(
    response => response,
    error => Promise.resolve({ error, ...error.response })
  )

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axios))
  )
}
