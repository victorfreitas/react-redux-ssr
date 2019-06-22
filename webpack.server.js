const path = require('path')
const nodeExternals = require('webpack-node-externals')

const withBaseConfig = require('./webpack.base')

module.exports = withBaseConfig({
  target: 'node',
  devtool: false,
  entry: ['@babel/polyfill', './src'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'server'),
  },
  externals: [nodeExternals()],
})
