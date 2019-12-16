import express from 'express'
import helmet from 'helmet'
import compression from 'compression'

import routes from './routes'
import env from './helpers/env'

const app = express()

app.use(helmet())
app.use(compression())
app.use(routes)

app.listen(env.port, () => {
  console.log(`Listening on port ${env.port}`) // eslint-disable-line no-console
})
