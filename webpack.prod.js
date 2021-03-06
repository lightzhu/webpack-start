const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HTMLDirs } = require("./src/pages/pageConfig");
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {}; //app: "./src/index.js",

// 生成多页面的集合
HTMLDirs.forEach(page => {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}.html`,
    template: path.resolve(__dirname, `./src/pages/${page}.html`),
    chunks: [page, "commons"]
  });
  HTMLPlugins.push(htmlPlugin);
  Entries[page] = path.resolve(__dirname, `./src/js/${page}.js`);
});

module.exports = {
  entry: Entries,
  // {
  //   // app: "./src/index.js",
  //   //react: "./src/js/react.js"
  //   // print: "./src/js/print.js"
  // },
  //用于映射开发的代码，方便调试
  devtool: "inline-source-map",
  //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
  devServer: {
    contentBase: "/",
    port: "5000", //监听端口
    //inline: true, //设置为true，当源文件改变的时候会自动刷新
    hot: true,
    hotOnly: true
  },
  plugins: [
    // new CleanWebpackPlugin(),
    ...HTMLPlugins,
    // new HtmlWebpackPlugin({
    //   title: "出口管理"
    // }),
    new MiniCssExtractPlugin({
      // 提取css插件
      filename: "./css/[name].css",
      chunkFilename: "./css/[name].css"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "./js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  //mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash:5]",
              outputPath: "./image/",
              publicPath: "/image/"
            }
          }
        ]
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
            cacheDirectory: true,
            presets: ["es2015", "react","stage-0"],
            plugins: [
              "react-hot-loader/babel",
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "es",
                  style: "css"
                }
              ]
            ]
          }
        }
      }
    ]
  },

  performance: {
    hints: false
  }
};
