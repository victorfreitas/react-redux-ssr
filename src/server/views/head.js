import { Helmet } from 'react-helmet'

export default () => {
  const helmet = Helmet.renderStatic()

  return `
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link rel="stylesheet" href="/static/css/style.css">
    </head>
  `
}
