import { matchRoutes } from 'react-router-config'

import { listRoutes } from '../../client/Routes/RoutesConfig'

export default (path, store) => {
  const routes = matchRoutes(listRoutes, path)
  const is404 = Boolean(routes.filter(({ route }) => route.notFound).length)
  const promises = routes.map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  )).filter(v => Boolean(v))

  return { promises, is404 }
}
