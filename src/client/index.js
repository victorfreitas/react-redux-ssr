import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App'

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
