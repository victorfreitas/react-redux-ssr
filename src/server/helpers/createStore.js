import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import env from './env'
import reducers from '../../client/reducers'

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: env('API_BASE_URL'),
    headers: {
      cookie: req.get('cookie') || '',
    },
  })

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.resolve({ error, ...error.response })
  )

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
}
