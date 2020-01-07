import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Routes from '../../client/routes/Routes'

const App = ({ item }) => (
  <Provider store={item.store}>
    <StaticRouter location={item.req.path} context={item.context}>
      <Routes />
    </StaticRouter>
  </Provider>
)

App.propTypes = {
  item: PropTypes.shape().isRequired,
}

export default App
