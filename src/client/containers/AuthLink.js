import { connect } from 'react-redux'

import AuthLink from '../components/AuthLink'

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(AuthLink)
