import { matchRoutes } from 'react-router-config'

import { listRoutes } from '../../client/Routes/RoutesConfig'

export default (path, store) => {
  const routes = matchRoutes(listRoutes, path)
  const is404 = !!routes.filter(({ route }) => route.notFound).length
  const promises = routes.map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  )).filter(v => !!v)

  return { promises, is404 }
}
