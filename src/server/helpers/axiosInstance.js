import axios from 'axios'

import env from './env'

export default (headers = {}) => axios.create({
  baseURL: env('API_BASE_URL'),
  headers,
})
