import express from 'express'

import apiRoutes from './apiRoutes'
import reactRoutes from './reactRoutes'

const router = express.Router()

router.use('/static', express.static('dist/public'))
router.use(apiRoutes)
router.use(reactRoutes)

export default router
