import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Auth = ({ auth, ChildComponent }) => {
  switch (auth) {
    case false:
      return <Redirect to="/" />

    case null:
      return <div>Loading...</div>

    default:
      return <ChildComponent />
  }
}

export default ChildComponent => {
  const mapStateToProps = ({ auth }) => ({
    auth,
    ChildComponent,
  })

  return connect(mapStateToProps)(Auth)
}
