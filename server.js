const express = require('express');
const webpack = require('webpack');
const cp = require('child_process');  // 可自动打开浏览器模块
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 5000.
app.listen(5000,'http://127.0.0.1', function () {
  console.log('Example app listening on port 5000!\n');
});
cp.exec('start http://127.0.0.1:5000/');  // 自动打开默认浏览器