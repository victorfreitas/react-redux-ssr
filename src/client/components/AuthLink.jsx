import React from 'react'
import PropTypes from 'prop-types'

import { getAuthLink } from '../utils'

const AuthLink = ({ auth }) => {
  const authLink = getAuthLink(auth)

  return (
    <a href={authLink.href}>
      {authLink.title}
    </a>
  )
}

AuthLink.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

export default AuthLink
