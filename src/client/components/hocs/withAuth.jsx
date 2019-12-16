import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Loader from '../Loader'

export default (Component) => {
  const Auth = ({ auth }) => {
    if (typeof auth === 'object') {
      return <Component />
    }

    if (auth === 0) {
      return <Loader />
    }

    return <Redirect to="/" />
  }

  Auth.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.bool]).isRequired,
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(Auth)
}
