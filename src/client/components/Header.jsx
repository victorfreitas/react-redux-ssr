import React from 'react'
import { Link } from 'react-router-dom'

import paths from '../routes/paths'
import AuthLink from '../containers/AuthLink'

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to={paths.home} className="brand-logo">
        React SSR
      </Link>
      <ul className="right">
        <li>
          <Link to={paths.users}>
            Users
          </Link>
        </li>
        <li>
          <Link to={paths.admins}>
            Admins
          </Link>
        </li>
        <li>
          <AuthLink />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
