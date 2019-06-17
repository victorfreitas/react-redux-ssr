import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  const RequireAuth = ({ auth }) => {
    switch (auth) {
      case false:
        return <Redirect to="/" />

      case null:
        return <div>Loading...</div>

      default:
        return <ChildComponent />
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth,
  })

  return connect(mapStateToProps)(RequireAuth)
}
