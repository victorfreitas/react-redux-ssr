import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Routes from '../client/Routes'

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{ }}>
      <Routes />
    </StaticRouter>
  )

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React Redux SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="static/bundle.js"></script>
      </body>
    </html>
  `
}
