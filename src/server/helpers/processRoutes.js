import { matchRoutes } from 'react-router-config'

import { listRoutes } from '../../client/Routes/RoutesConfig'
import getPromises from './getPromises'
import is404 from './is404'

export default (path, store) => {
  const routes = matchRoutes(listRoutes, path)

  return {
    promises: getPromises(routes, store),
    is404: is404(routes),
  }
}
