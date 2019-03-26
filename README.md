# webpack-start
webpack构建应用入门
# 开始
* npx webpack
* npx webpack --config webpack.config.js
* npm watch : "webpack --watch",//这种方式不能动态刷新浏览器
* npm start: "webpack-dev-server --open",实时刷新浏览器
* npm server: "node server.js",这种方式适用于有服务器的项目,比如此项目中的server.js，实质是使用中间件的原理（webpack-dev-middleware）
# 配置文件分割
* 开发环境用 webpack.dev => "start": "webpack-dev-server --open",
* 生产环境用 webpack.prod => "build": "webpack --config webpack.prod.js"
# 对css样式进行分离抽取的时候热重载功能失效
# 引入antd
babel-loader 要设置 //["import",{libraryName: "antd", libraryDirectory: "es",style: "css"}]
# "stage-0"
用于解决无法支撑箭头函数及其他一些新语法的问题
# 关于 redux的简单使用
* 1、创建一个action,表明你要干什么;
* 2、创建一个reducer,用来处理action的具体操作,reducer中可以初始化数据，这个数据就是相关组件中的state数据;
* 3、在组件中创建一个对应reducer的store,这个store可以将action的内容通过dispatch传递给对应的reducer,reducer处理结束后,store可以通过subscribe获取更新后的数据。