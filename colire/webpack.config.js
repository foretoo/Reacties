const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const myIP = process.platform === 'darwin' ? '172.20.10.4' : 'localhost'
const port = '8000'

module.exports = {

  entry: "./src/index.js",
  devtool: 'inline-source-map',

  resolve: {
    alias: {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ],

  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js"
  },

  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    clientLogLevel: 'silent',
    hot: true,
    open: true,
    host: myIP,
    port: port
  }
}
