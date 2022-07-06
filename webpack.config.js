const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    weatherAPI: "./src/weatherAPI.js",
    gifAPI: "./src/gifAPI.js",
    searchForm: "./src/searchForm.js",
    styles: "./src/styles.css",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
