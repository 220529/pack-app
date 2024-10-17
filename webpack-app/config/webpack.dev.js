const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { distPath } = require("./paths");
const webpackCommonConf = require("./webpack.common.js");

module.exports = merge(webpackCommonConf, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: distPath,
    },
    port: 2000,
    compress: true, // 启动 gzip 压缩
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("development"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
});
