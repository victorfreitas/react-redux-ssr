import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Loader from '../Loader'

export default (Component) => {
  const Auth = ({ auth }) => {
    switch (auth) {
      case false:
        return <Redirect to="/" />

      case 0:
        return <Loader />

      default:
        return <Component />
    }
  }

  Auth.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.bool]).isRequired,
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(Auth)
}
