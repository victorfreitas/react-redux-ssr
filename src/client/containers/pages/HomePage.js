import { connect } from 'react-redux'

import { dispatchSeo } from '../../actions'
import HomePage from '../../pages/HomePage'

const seoMock = {
  title: 'Home',
  description: 'Home page',
}

const mapStateToProps = () => ({ seoMock })

const mapDispatchToProps = {
  dispatchSeo,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
  loadData: ({ dispatch }) => dispatch(dispatchSeo(seoMock)),
}
