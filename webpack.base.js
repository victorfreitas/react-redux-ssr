const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const plugins = [new CleanWebpackPlugin()]

const getBrowserSyncPlugin = () => new BrowserSyncPlugin({
  host: 'localhost',
  port: 3001,
  proxy: 'localhost:3000',
})

const isProd = process.env.NODE_ENV === 'production'
const baseConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'cheap-module-source-map',
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
  plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },
  watch: !isProd,
}

module.exports = (config) => {
  if (config.target === 'web') {
    baseConfig.plugins.push(getBrowserSyncPlugin())
  }

  return merge(baseConfig, config)
}
