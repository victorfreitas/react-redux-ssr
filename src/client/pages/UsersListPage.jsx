import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

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
        <h2>Users List</h2>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users,
})

const mapDispatchToProps = {
  fetchUsers,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage),
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
}
