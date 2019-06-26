const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'
const baseConfig = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'cheap-module-source-map' : false,
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },
  watch: isDev,
}

module.exports = config => merge(baseConfig, config)
