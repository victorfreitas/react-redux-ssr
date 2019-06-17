const path = require('path')

const withBaseConfig = require('./webpack.base')

module.exports = withBaseConfig({
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
})
