import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

import Header from '../components/Header'
import { fetchCurrentUser } from '../actions'

const Page = ({ route }) => (
  <Fragment>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
)

export default {
  component: Page,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}
