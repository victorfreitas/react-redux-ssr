import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'

const Page = ({ route, location }) => (
  <Fragment>
    <Helmet>
      <title>
        {`${location.pathname} | Page`}
      </title>
      <meta charSet="utf-8" />
      <meta name="description" content="Home page component" />
      <meta property="og:title" content="Homepage" />
      <link rel="canonical" href={location.pathname} />
    </Helmet>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
)

Page.propTypes = {
  route: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
}

export default Page
