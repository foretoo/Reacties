const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const homeIP = "192.168.1.44"
const katIP = "192.168.0.103"
const mobileIP = "172.20.10.4"
const local = "localhost"

module.exports = (env, { mode }) => ({
  entry: {
    index: "./src/index.js",
  },
  devtool: mode === "development" ? "inline-source-map" : false,

  resolve: {
    alias: {
      "react":       "preact/compat",
      "react-dom":   "preact/compat",
      "@app":        path.resolve(__dirname, "src/app"),
      "@assets":     path.resolve(__dirname, "src/assets"),
      "@pages":      path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils":      path.resolve(__dirname, "src/utils"),
    },
  },

  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:  "babel-loader",
      },
      {
        test: /\.css$/,
        use:  [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test:   /\.(png|jpg|gif|svg)$/i,
        loader: "url-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      title:  "Colire",
      meta:   { viewport: "width=device-width, initial-scale=1, shrink-to-fit=no" },
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "dist/[name]" + (mode === "development" ? "" : ".[contenthash:8]") + ".css",
    }),
  ],

  output: {
    path:             path.join(__dirname, ""),
    filename:         "dist/[name].[contenthash:8].js",
    chunkFilename:    ({ chunk }) => "dist/" + (chunk.name || chunk.id) + ".vendor.js",
  },

  devServer: {
    historyApiFallback: true,
    client:             {
      logging: "none",
    },
    allowedHosts: "auto",
    hot:          true,
    open:         true,
    host:         homeIP,
    port:         8000,
  },
})
