import express from 'express'
import proxy from 'express-http-proxy'

import env from '../helpers/env'

const router = express.Router()
const proxyArgs = [
  env('API_BASE_URL'),
  {
    proxyReqOptDecorator(opts) {
      const { headers } = opts

      headers['x-forwarded-host'] = 'localhost:3000'

      return { ...opts, headers }
    },
  },
]

router.use('/api', proxy(...proxyArgs))

export default router
