import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const axiosInstance = axios.create({
  baseURL: '/api',
})

axiosInstance.interceptors.response.use(
  response => response,
  error => Promise.resolve({ error, ...error.response })
)

export default createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)
