import { connect } from 'react-redux'

import { fetchUsers } from '../../actions'
import UsersListPage from '../../pages/UsersListPage'

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
