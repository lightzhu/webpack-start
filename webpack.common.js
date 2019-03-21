const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
  // devServer: {
  //   contentBase: "./dist",
  //   port: "5000", //监听端口
  //   inline: true, //设置为true，当源文件改变的时候会自动刷新
  //   hot: true
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack入门"
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
