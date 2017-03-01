# vue2-webpack-es6
 这是一个手动构建的vue2项目，主要配置有：


### 构建方面
* 1、使用webpack配置和打包
* 2、实时开发调试
* 3、ES 6语法
* 4、ESLint语法检查
* 5、SCSS样式以及PostCSS配置自动添加浏览器兼容
* 6、加入一个全局样式文件（SCSS），并提取组件中的样式（SCSS），一起打包成CSS样式文件
* 7、图片优化处理（小于10K使用base64格式，大于10K使用文件资源形式）
* 8、代码打包分库文件和程序文件分别打包，库文件预设Vue/Vue-Router/axios三个库
* 9、开发模式和生产模式特别配置

###使用
* 下载
`git clone https://github.com/yaoyonstudio/vue2-webpack-es6.git`
* 在命令行下进入项目文件夹
`cnpm install`
* 开发调试
`npm run server`
* 打包（生产模式）
`npm run build`
