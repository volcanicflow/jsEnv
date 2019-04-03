const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "eval-source-map",
  devServer: {
    //serves dist directory to localhost:8080 by default
    contentBase: "./dist",
    //compress: true,
    //port: 9000,
    hot: true
  },
  plugins: [
    //CleanWebpack: cleans old files out of dist;
    //used with HtmlWebpackPlugin to update
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    //[name] is used by HtmlWebpackPlugin, more
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            babelrc: {
              plugins: ["@babel/plugin-proposal-object-rest-spread"]
            }
          }
        }
      },
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
