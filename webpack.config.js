const path = require("path");
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
    //port: 9000,
    hot: false
  },
  plugins: [
    //cleaning old files out of dist
  ],
  output: {
    //[name] is used by HtmlWebpackPlugin
    filename: "bundle.js",
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
