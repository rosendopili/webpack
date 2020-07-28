// webpack.config.js
const path = require("path"); // connect path to webpack config

// we specified the location where Webpack will start bundling - it's the index.js file inside the src folder

module.exports = {
    entry: { main: "./src/index.js" },
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
    module: {
    rules: [ // this is an array of rules
      // add an object containing rules for Babel to it
      {
        // a regular expression that searches for all js files
        test: /\.js$/,
        // all files must be processed by babel-loader
        loader: "babel-loader",
        // exclude the node_modules folder, we don't need to process files in it
        exclude: "/node_modules/"
      }
      ]
  }
};
