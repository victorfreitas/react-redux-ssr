import { connect } from 'react-redux'

import { requestAdmins, dispatchSeo } from '../../actions'
import AdminsListPage from '../../pages/AdminsListPage'

const seoMock = {
  title: 'Admins',
  description: 'Admins list page',
}

const mapStateToProps = ({ admins, responseError }) => ({
  admins,
  responseError,
  seoMock,
})

const mapDispatchToProps = {
  requestAdmins,
  dispatchSeo,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsListPage),
  loadData: async ({ dispatch }) => {
    await dispatch(dispatchSeo(seoMock))

    return dispatch(requestAdmins())
  },
}
