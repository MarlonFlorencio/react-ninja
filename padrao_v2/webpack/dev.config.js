'use strict'

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const common = require('./common')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry
  ],

  output: Object.assign({}, common.output, {
    publicPath: ''
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlPlugin(common.htmlPLuginConfig)
  ],

  module: {
    rules: [
      common.standardPreLoaders, 
      common.jsLoaders, 
      common.cssLoaders
    ]
  },

  resolve: common.resolve
}
