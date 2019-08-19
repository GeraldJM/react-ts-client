var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var babelLoader = {
  loader: 'babel-loader'
}

var typescriptLoader = {
  loader: 'ts-loader'
}

var cssLoader = {
  loader: 'css-loader'
}

var styleLoader = {
  loader: 'style-loader'
}

var typescriptRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    typescriptLoader,
    babelLoader
  ]
}

var javascriptRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    babelLoader
  ]
}

var styleRule = {
  test: /\.css$/,
  use: [
    styleLoader, 
    cssLoader
  ],
  exclude: /node_modules/
}

var config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      typescriptRule,
      javascriptRule,
      styleRule
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

module.exports = config;