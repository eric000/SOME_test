const path = require('path')
const fileSize = require('./webpack-plugins')

module.exports = (env = {}) => ({
  mode: env.mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module:{
    rules: [
      {
        test: /.js$/,
        use: path.resolve(__dirname, './url-replace.js')
      }
    ]
  },
  plugins: [
    new fileSize()
  ]
})