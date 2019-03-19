Anonymous Pro is a free, open source font available at: https://www.marksimonson.com/fonts/view/anonymous-pro

There are a number of different loaders available through webpack; listed here with a brief description

- json
  included by default
- loading css, pre- or post- processing
  css-loader
  style-loader
- loading an arbitrary file (specify what types in webpack config)
  file-loader
- compress images and serve them to dist
  image-webpack-loader
- base64 urls
  url-loader
- CSVs, TSVs
  csv-loader
- XML
  xml-loader
- multiple entry points
  HTMLWebpackPlugin; html-webpack-template
- cleaning the dist folder of old assets
  clean-webpack-plugin
- pulling out a webpack manifest data; how webpack maps modules to output bundles: https://webpack.js.org/concepts/manifest/;
  also look into long-term caching if you're going this route: https://webpack.js.org/guides/caching/
  WebpackManifestPlugin
- source mapping, development mode: numerous options available; non-prod: https://webpack.js.org/configuration/devtool/
  inline-source-map
- webpack has a built in "watch" mode to watch file contents and refresh on saved change; see watch script in package.json
- options for continual reloading: https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  webpack-dev-server
