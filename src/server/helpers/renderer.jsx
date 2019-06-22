import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import { Helmet } from 'react-helmet'

import Routes from '../../client/Routes'

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const helmet = Helmet.renderStatic()

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())};</script>
        <script src="/static/vendor.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}
