import express from 'express'

import renderer from './helpers/renderer'

const app = express()

app.use('/static', express.static('public'))

app.get('*', (req, res) => {
	res.send(renderer(req))
})

app.listen(3002, () => {
	console.log('Listening on port 3002')
})
