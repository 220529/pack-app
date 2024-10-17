const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { srcPath, publicPath } = require("./paths");

module.exports = {
  entry: path.join(srcPath, "index"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.(js|ts|tsx)$/, // 匹配.ts, tsx文件
        include: srcPath,
        use: {
          loader: "babel-loader",
          options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
            cacheDirectory: true, // 启用缓存
          },
        },
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(publicPath, "index.html"),
      filename: "index.html",
    }),
  ],
};
