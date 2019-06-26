import { connect } from 'react-redux'

import { requestCurrentUser } from '../../actions'
import Page from '../../pages/Page'

const mapStateToProps = ({ seo }) => ({ seo })

export default {
  component: connect(mapStateToProps)(Page),
  loadData: ({ dispatch }) => dispatch(requestCurrentUser()),
}
