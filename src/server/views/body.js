import serialize from 'serialize-javascript'

export default (content, store) => `
  <body>
    <div id="root">${content}</div>
    <script>window.INITIAL_STATE = ${serialize(store.getState())};</script>
    <script src="/static/js/vendor.js"></script>
    <script src="/static/js/bundle.js"></script>
  </body>
`
