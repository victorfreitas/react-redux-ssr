import { renderRoutes } from 'react-router-config'

import paths from './paths'
import Page from '../containers/pages/Page'
import HomePage from '../pages/HomePage'
import UsersListPage from '../containers/pages/UsersListPage'
import AdminsListPage from '../containers/pages/AdminsListPage'
import NotFoundPage from '../pages/NotFoundPage'
import requireAuth from '../components/hocs/requireAuth'

export const listRoutes = [
  {
    ...Page,
    routes: [
      {
        ...HomePage,
        path: paths.home,
        exact: true,
      },
      {
        ...UsersListPage,
        path: paths.users,
        exact: true,
      },
      {
        ...AdminsListPage,
        component: requireAuth(AdminsListPage.component),
        path: paths.admins,
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]

export default renderRoutes(listRoutes)
