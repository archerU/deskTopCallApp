const HtmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    contentBase: "./",
    port: 8080,
    historyApiFallback: true
  },
  plugins:[
    new HtmlwebpackPlugin({
      template: './index.html'
    }),
    // new CleanWebpackPlugin()
  ]
}