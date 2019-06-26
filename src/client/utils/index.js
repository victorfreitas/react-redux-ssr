import paths from '../routes/paths'

export const isAuthenticate = auth => auth

export const getAuthLink = auth => (auth
  ? { href: paths.logout, title: 'Logout' }
  : { href: paths.login, title: 'Log In' })
