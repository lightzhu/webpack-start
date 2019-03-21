const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: "./src/index.js",
    react: "./src/js/react.js"
    // print: "./src/js/print.js"
  },
  //用于映射开发的代码，方便调试
  devtool: "inline-source-map",
  //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
  devServer: {
    contentBase: "./dist",
    port: "5000", //监听端口
    inline: true, //设置为true，当源文件改变的时候会自动刷新
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "出口管理"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
      }
    ]
  }
};
