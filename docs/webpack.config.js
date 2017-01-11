var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname)
        ],
      },
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'vue$': 'vue/dist/vue.min'
    }
  },
  vue: {
    loaders: {
      scss: "vue-style!css!sass"
    }
  },
}
