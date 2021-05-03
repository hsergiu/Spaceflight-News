var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build.js'
  },
  devServer: {
    disableHostCheck: true,
    clientLogLevel: 'warning',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    open: false,
    overlay: false,
    quiet: true
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
