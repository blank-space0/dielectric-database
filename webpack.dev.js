// webpack.dev.js
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    open: true,
    port: 5173,
    historyApiFallback: true,   
  },
  plugins: [new ReactRefreshWebpackPlugin()]
});