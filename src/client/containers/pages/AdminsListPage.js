import { connect } from 'react-redux'

import { fetchAdmins } from '../../actions'
import AdminsListPage from '../../pages/AdminsListPage'

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
