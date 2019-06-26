import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import Routes from '../../client/routes/Routes'

/* eslint-disable react/prop-types */
const App = ({ req, store, context }) => (
  <Provider store={store}>
    <StaticRouter location={req.path} context={context}>
      <Routes />
    </StaticRouter>
  </Provider>
)
/* eslint-enable react/prop-types */

export default App
