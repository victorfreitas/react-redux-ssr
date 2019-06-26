import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'

import Header from '../components/Header'

const Page = ({ seo, route, location }) => (
  <Fragment>
    <Helmet>
      <title>
        {`${seo.title} | React SSR`}
      </title>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <link rel="canonical" href={location.pathname} />
    </Helmet>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
)

Page.propTypes = {
  route: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
  seo: PropTypes.shape().isRequired,
}

export default Page
