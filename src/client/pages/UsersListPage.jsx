import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class UsersListPage extends PureComponent {
  componentWillMount() {
    const { fetchUsers } = this.props

    fetchUsers()
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
  fetchUsers: PropTypes.func.isRequired,
}

export default UsersListPage
