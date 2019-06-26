import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const HomePage = ({ dispatchSeo, seoMock }) => {
  useEffect(() => {
    dispatchSeo(seoMock)
  }, [])

  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>
        Welcome
      </h3>
      <p>
        Check out these awesome features
      </p>
    </div>
  )
}

HomePage.propTypes = {
  dispatchSeo: PropTypes.func.isRequired,
  seoMock: PropTypes.shape().isRequired,
}

export default HomePage
