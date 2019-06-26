const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const globImporter = require('node-sass-glob-importer')
const path = require('path')

const withBaseConfig = require('./webpack.base')

const isDev = process.env.NODE_ENV !== 'production'

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'css/style.css',
  }),
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3001,
    proxy: 'localhost:3000',
  }),
]

const rules = [
  {
    test: /\.s?css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDev,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDev,
          importer: globImporter(),
        },
      },
    ],
  },
]

const config = withBaseConfig({
  target: 'web',
  entry: [
    'regenerator-runtime/runtime',
    './src/client'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'js/bundle.js',
    chunkFilename: 'js/vendor.js',
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins,
  module: {
    rules,
  },
})

module.exports = config
