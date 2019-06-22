import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  const authLink = auth
    ? { href: '/api/logout', title: 'Logout' }
    : { href: '/api/auth/google', title: 'Log In' }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link to="/admins">
              Admins
            </Link>
          </li>
          <li>
            <a href={authLink.href}>
              {authLink.title}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

const mapStateToProps = ({ auth }) => ({
  auth,
})

export default connect(mapStateToProps)(Header)
