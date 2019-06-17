import { renderRoutes } from 'react-router-config'

import Page from '../pages/Page'
import HomePage from '../pages/HomePage'
import UsersListPage from '../pages/UsersListPage'
import AdminsListPage from '../pages/AdminsListPage'
import NotFoundPage from '../pages/NotFoundPage'
import requireAuth from '../components/hocs/requireAuth'

export const listRoutes = [
  {
    ...Page,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
        exact: true,
      },
      {
        ...AdminsListPage,
        component: requireAuth(AdminsListPage.component),
        path: '/admins',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]

export default renderRoutes(listRoutes)
