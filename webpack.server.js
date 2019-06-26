const path = require('path')
const nodeExternals = require('webpack-node-externals')

const withBaseConfig = require('./webpack.base')

module.exports = withBaseConfig({
  target: 'node',
  devtool: false,
  entry: [
    'regenerator-runtime/runtime',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/server'),
  },
  externals: [nodeExternals()],
})
