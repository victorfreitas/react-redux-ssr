import { connect } from 'react-redux'

import { dispatchSeo } from '../../actions'
import NotFoundPage from '../../pages/NotFoundPage'

const seoMock = {
  title: 'Page Not Found',
  description: '404 error',
}

const mapStateToProps = () => ({ seoMock })

const mapDispatchToProps = {
  dispatchSeo,
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(NotFoundPage),
  is404: true,
  loadData: ({ dispatch }) => dispatch(dispatchSeo(seoMock)),
}
