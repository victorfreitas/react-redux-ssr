const merge = require('webpack-merge')

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {
              targets: {
                browsers: ['last 2 versions'],
              },
            }],
          ],
        },
      },
    ],
  },
}

module.exports = config => merge(baseConfig, config)
