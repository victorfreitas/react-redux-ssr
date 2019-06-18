import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchAdmins } from '../actions'

class AdminsListPage extends PureComponent {
  componentWillMount() {
    const { fetchAdmins } = this.props

    fetchAdmins()
  }

  renderAdmins() {
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
          {!responseError
            ? this.renderAdmins()
            : <li>{responseError.data.error}</li>}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins, responseError }) => ({
  admins,
  responseError,
})

const mapDispatchToProps = {
  fetchAdmins,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
}
