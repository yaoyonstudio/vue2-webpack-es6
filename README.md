# vue2-webpack-es6
 这是一个手动构建的vue2项目，主要配置有：


### 构建方面
* SCSS/PostCSS自动加CSS兼容前缀的预处理
* ES6语法
* 图片优化处理（小于10K使用base64格式，大于10K使用文件资源形式）
* ESLint语法检查（使用的是vue-cli生成默认项目相同的规则）
* 开发模式下自动刷新

###使用
* 下载
`git clone https://github.com/yaoyonstudio/vue2-webpack-es6.git`
* 在命令行下进入项目文件夹
`cnpm install`
* 开发调试
`npm run server`
* 打包（生产模式）
`npm run build`
