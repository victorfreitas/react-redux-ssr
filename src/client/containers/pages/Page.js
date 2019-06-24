import { connect } from 'react-redux'

import { fetchCurrentUser } from '../../actions'
import Page from '../../pages/Page'

const mapStateToProps = null

export default {
  component: connect(mapStateToProps)(Page),
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}
