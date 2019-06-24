import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class AdminsListPage extends PureComponent {
  componentWillMount() {
    const { fetchAdmins } = this.props

    fetchAdmins()
  }

  renderList() {
    const { admins } = this.props

    return admins.map(admin => (
      <li key={admin.id.toString()}>
        {admin.name}
      </li>
    ))
  }

  render() {
    const { responseError } = this.props

    return (
      <div>
        <h3>
          Protected list of admins
        </h3>
        <ul>
          {!responseError.data
            ? this.renderList()
            : (
              <li>
                {responseError.data.error}
              </li>
            )}
        </ul>
      </div>
    )
  }
}

AdminsListPage.propTypes = {
  admins: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  responseError: PropTypes.shape().isRequired,
  fetchAdmins: PropTypes.func.isRequired,
}

export default AdminsListPage
