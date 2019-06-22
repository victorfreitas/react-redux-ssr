import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Auth = ({ auth, ChildComponent }) => {
  switch (auth) {
    case false:
      return <Redirect to="/" />

    case null:
      return (
        <div>
          Loading...
        </div>
      )

    default:
      return <ChildComponent />
  }
}

Auth.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  ChildComponent: PropTypes.shape().isRequired,
}

export default (ChildComponent) => {
  const mapStateToProps = ({ auth }) => ({
    auth,
    ChildComponent,
  })

  return connect(mapStateToProps)(Auth)
}
