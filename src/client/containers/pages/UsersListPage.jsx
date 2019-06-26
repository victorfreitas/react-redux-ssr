import { connect } from 'react-redux'

import { requestUsers, dispatchSeo } from '../../actions'
import UsersListPage from '../../pages/UsersListPage'

const seoMock = {
  title: 'Users',
  description: 'Users list',
}

const mapStateToProps = ({ users }) => ({
  users,
  seoMock,
})

const mapDispatchToProps = {
  requestUsers,
  dispatchSeo,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage),
  loadData: async ({ dispatch }) => {
    await dispatch(dispatchSeo(seoMock))

    return dispatch(requestUsers())
  },
}
