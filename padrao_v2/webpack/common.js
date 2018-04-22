'use strict'

const { join } = require('path')

module.exports = {
  entry: join(__dirname, '..', 'src', 'index'),

  output: {
    path: join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPLuginConfig : {
    title: 'GitHub App',
    template: join(__dirname, '..', 'src', 'html', 'template.html')
  },

  standardPreLoaders: {
    test: /\.js$/,
    enforce:'pre',
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'standard-loader'
  },

  jsLoaders: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'babel-loader'
  },
  
  cssLoaders:{
    test: /\.css$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: ['style-loader', 'css-loader']
  },
    
  resolve: {
    alias: {
      src: join(__dirname, '..', 'src'),
      utils: join(__dirname, '..', 'src', 'utils'),
      components: join(__dirname, '..', 'src', 'components'),
      containers: join(__dirname, '..', 'src', 'containers'),
      dist: join(__dirname, '..', 'src', 'dist')
    }
  }

}
