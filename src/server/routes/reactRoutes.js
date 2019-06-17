import express from 'express'

import createStore from '../helpers/createStore'
import processRoutes from '../helpers/processRoutes'
import renderer from '../helpers/renderer'

const router = express.Router()

router.get('*', async (req, res) => {
  const store = createStore(req)
  const { promises, is404 } = processRoutes(req.path, store)

  await Promise.all(promises)

  const context = {}
  const content = renderer(req, store, context)

  if (context.url) {
    return res.redirect(301, context.url)
  }

  if (is404) {
    res.status(404)
  }

  res.send(content)
})

export default router
