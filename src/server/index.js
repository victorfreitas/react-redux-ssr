import express from 'express'
import helmet from 'helmet'
import compression from 'compression'

import routes from './routes'

const app = express()

app.use(helmet())
app.use(compression())
app.use(routes)

app.listen(3000, () => {
	console.log('Listening on port 3000')
})
