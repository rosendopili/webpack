// webpack.config.js
const path = require("path"); // connect path to webpack config
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
// we specified the location where Webpack will start bundling - it's the index.js file inside the src folder
// connect mini-css-extract-plugin to the project
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: { main: "./src/index.js" },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      // add the rule for processing files
      {
        // this regular expression will search for files with the following extensions
        test: /\.(png|svg|jpg|gif|woff2)$/,
        // file-loader should be used when processing those files
        loader: "file-loader"
      },
      // add the rule for working with HTML in a similar way
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        // use these rules only for CSS files
          test: /\.css$/,
        // use MiniCssExtractPlugin.loader и css-loader
        // when processing these files
        loader: [MiniCssExtractPlugin.loader, {  loader: "css-loader",
        // add an options object
        options: { importLoaders: 1 } }, "postcss-loader"]// add postcss-loader  
     },
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
      new MiniCssExtractPlugin() // connect the plugin for merging CSS files
  ]// add the array here
};
