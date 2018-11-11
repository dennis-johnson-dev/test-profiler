const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: [
    path.resolve(__dirname, "./src/index.js"),
    "webpack-hot-middleware/client?reload=true"
  ], // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string    // the filename template for entry chunks
    publicPath: "/", // string    // the url to the output directory resolved relative to the HTML page
    globalObject: "this"
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./src")],
        // flags to apply these rules, even if they are overridden (advanced option)
        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-syntax-dynamic-import"]
        }
        // options for the loader
      }
      // matches if any condition is matched (default for arrays)
      // { resource: { not: /* condition */ } }
      // matches if the condition is not matched
    ]
    /* Advanced module configuration (click to show) */
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ["node_modules", path.resolve(__dirname, "./src")],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".css"]
    // extensions that are used
    /* Advanced resolve configuration (click to show) */
  },
  devtool: "cheap-source-map", // enum  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: "web", // enum  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules
  // lets you provide options for webpack-serve
  stats: "errors-only", // lets you precisely control what bundle information gets displayed
  devServer: {
    port: 1337,
    proxy: {
      // proxy URLs to backend development server
      "/api": "http://localhost:3000"
    },
    contentBase: path.join(__dirname, "./dist"), // boolean | string | array, static file location
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    noInfo: false // only errors & warns on hot reload
    // ...
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    })
    // ...
  ]
  // list of additional plugins
  /* Advanced configuration (click to show) */
};
