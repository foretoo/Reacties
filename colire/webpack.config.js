const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          loader: 'url-loader'
        }
      ]
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "dist/[name].[contenthash].css" // .[contenthash]
      })
    ],

    output: {
      path: path.join(__dirname, ''),
      filename: 'dist/[name].[contenthash].js',
      chunkFilename: ({ chunk }) => 'dist/' + (chunk.name || chunk.id) + '.vendor.js',
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

function lodashHandler(id) {
  const i = id.indexOf('lodash_')
  if (i !== -1) {
    const name = id.slice(i + 8, -3)
    return 'lodash.' + name + '.vendor.js'
  }
}
