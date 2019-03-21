const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports =merge(common, {
  //用于映射开发的代码，方便调试
  devtool: "inline-source-map",
  //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
  devServer: {
    contentBase: "./dist",
    port: "5000", //监听端口
    inline: true, //设置为true，当源文件改变的时候会自动刷新
    hot: true
  },
  // mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  }
});
