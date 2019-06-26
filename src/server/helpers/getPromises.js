export default (routes, store) => {
  const process = ({ route }) => (
    route.loadData && route.loadData(store)
  )

  return routes.map(process).filter(v => Boolean(v))
}
