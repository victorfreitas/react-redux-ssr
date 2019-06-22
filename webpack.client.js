const path = require('path')

const withBaseConfig = require('./webpack.base')

module.exports = withBaseConfig({
  entry: ['@babel/polyfill', './src/client'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: 'vendor.js',
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
})
