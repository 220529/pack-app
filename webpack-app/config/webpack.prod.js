const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackCommonConf = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const { srcPath, distPath } = require("./paths");

module.exports = merge(webpackCommonConf, {
  mode: "production",
  output: {
    filename: "bundle.[contenthash:8].js", // 打包代码时，加上 hash 戳
    path: distPath,
    clean: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify("production"),
    }),
  ],
});
