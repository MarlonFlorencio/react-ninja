'use strict'

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./common')

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-[hash].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlPlugin(common.htmlPLuginConfig)
  ],

  module: {
    rules: [
      common.standardPreLoaders,
      common.jsLoaders,
      Object.assign({}, common.cssLoader, {
        use: ExtractTextPlugin.extract.apply({
          fallback: common.cssLoader.use[0],
          use: common.cssLoader.use.slice(1)
        })
      })
    ]
  },

  resolve: common.resolve

}
