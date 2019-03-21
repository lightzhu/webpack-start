# webpack-start
webpack构建应用入门
# 开始
npx webpack
npx webpack --config webpack.config.js
npm watch : "webpack --watch",//这种方式不能动态刷新浏览器
npm start: "webpack-dev-server --open",实时刷新浏览器
npm server: "node server.js",这种方式适用于有服务器的项目,比如此项目中的server.js，实质是使用中间件的原理（webpack-dev-middleware）
# 配置文件分割