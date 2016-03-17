//HTML Webpack Plugin will take the 'index.html' from our dist folder (
// the one with the code that webpack has bundled up)
//and inject it into the body of our app's index.html
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'    //webpack's entry point
  ],
  module: {
    loaders: [
      //loaders transform given files
      //this is the babel transformer to transform JSX -> JS
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}    ]
  },
  output: {
    //where to output the bundled code
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
