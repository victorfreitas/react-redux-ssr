import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './App'
import head from './head'
import body from './body'

export default (req, store, context) => {
  const content = renderToString(
    <App item={{ req, store, context }} />
  )

  return `
    <!DOCTYPE html>
    <html>
      ${head()}
      ${body(content, store)}
    </html>
  `
}
