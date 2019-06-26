import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class UsersListPage extends PureComponent {
  componentWillMount() {
    const { dispatchSeo, seoMock, requestUsers } = this.props

    dispatchSeo(seoMock)
    requestUsers()
  }

  renderUsers() {
    const { users } = this.props

    return users.map(user => (
      <li key={user.id.toString()}>
        {user.name}
      </li>
    ))
  }

  render() {
    return (
      <div>
        <h2>
          Users List
        </h2>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

UsersListPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  requestUsers: PropTypes.func.isRequired,
  dispatchSeo: PropTypes.func.isRequired,
  seoMock: PropTypes.shape().isRequired,
}

export default UsersListPage
