import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const NotFoundPage = ({ dispatchSeo, seoMock }) => {
  useEffect(() => {
    dispatchSeo(seoMock)
  }, [])

  return (
    <div>
      <h1>
        Ooops, route not found!
      </h1>
    </div>
  )
}

NotFoundPage.propTypes = {
  dispatchSeo: PropTypes.func.isRequired,
  seoMock: PropTypes.shape().isRequired,
}

export default NotFoundPage
