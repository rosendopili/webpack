// webpack.config.js
const path = require("path"); // connect path to webpack config
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
// we specified the location where Webpack will start bundling - it's the index.js file inside the src folder

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
    ]
  }, 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html" // path to our index.html file
  })] // add the array here
};
