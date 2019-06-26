export default routes => (
  Boolean(routes.filter(({ route }) => route.is404).length)
)
