import express from 'express'

import createStore from '../helpers/createStore'
import processRoutes from '../helpers/processRoutes'
import templateRoot from '../views/templateRoot'

const router = express.Router()

// eslint-disable-next-line consistent-return
router.get('*', async (req, res) => {
  const store = createStore(req)
  const { promises, is404 } = processRoutes(req.path, store)

  await Promise.all(promises)

  const context = {}
  const content = templateRoot(req, store, context)

  if (context.url) {
    return res.redirect(301, context.url)
  }

  if (is404) {
    res.status(404)
  }

  res.send(content)
})

export default router
