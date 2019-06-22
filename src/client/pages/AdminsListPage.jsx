import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchAdmins as fetchAdminsAction } from '../actions'

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
          {!responseError.data
            ? this.renderAdmins()
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

const mapStateToProps = ({ admins, responseError }) => ({
  admins,
  responseError,
})

const mapDispatchToProps = {
  fetchAdmins: fetchAdminsAction,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdminsAction()),
}
