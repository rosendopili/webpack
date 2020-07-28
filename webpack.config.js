// webpack.config.js
const path = require("path"); // connect path to webpack config

// we specified the location where Webpack will start bundling - it's the index.js file inside the src folder

module.exports = {
    entry: { main: "./src/index.js" }, 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }
}

// specified and named the file in which all the js code will be collected

