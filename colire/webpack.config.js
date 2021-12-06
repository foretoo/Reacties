const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const myIP = (process.platform === 'darwin' && '192.168.1.44') || (process.platform === 'win32' && '192.168.1.51') || 'localhost'
const port = '8000'

module.exports = (env, { mode }) => {
  return {
    entry: {
      index: './src/index.js'
    },
    devtool: mode === 'development' ? 'inline-source-map' : false,

    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html'
      })
    ],

    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      chunkFilename: ({ chunk }) => {
          const i = chunk.id.indexOf('lodash')
          if (i !== -1) {
            const name = chunk.id.slice(i + 8, -3)
            return 'lodash.' + name + '.vendor.js'
          }
          return chunk.name + '.vendor.js'
        },
      hashDigestLength: 16,
    },

    devServer: {
      historyApiFallback: true,
      client: {
        logging: 'none',
      },
      allowedHosts: 'auto',
      hot: true,
      open: true,
      host: myIP,
      port: port
    }
  }
}
