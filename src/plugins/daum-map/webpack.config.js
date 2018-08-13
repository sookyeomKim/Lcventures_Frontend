// eslint-disable-next-line
const path = require('path')
// eslint-disable-next-line
const webpack = require('webpack')
// eslint-disable-next-line
const plugin = './'

module.exports = {
  entry: ['babel-polyfill', './demo/src/entry.js'],
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
    filename: 'demo.bundle.js'
  },
  resolve: {
    alias: {
      'vue-daum-map': path.resolve('./', 'src/VueDaumMap.vue')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            esModule: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }/* ,
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    publicPath: '/dist',
    compress: true,
    port: 8086
  } */
}
