const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    //serves dist directory to localhost:8080 by default
    contentBase: "./dist",
    //compress: true,
    //port: 9000
    hot: true
  },
  plugins: [
    //cleaning old files out of dist
    new CleanWebpackPlugin(),
    //WARNING: new index.html is produced, overwrites your old one
    new HtmlWebpackPlugin({
      title: "managing outputs"
    }),
    new webpack.HotModuleReplaceentPlugin()
  ],
  output: {
    //[name] is used by HtmlWebpackPlugin
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
};
