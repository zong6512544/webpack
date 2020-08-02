# webpack 入门

## $\color{purple}{学习内容：}$

- 1.webpack起步
- 2.webpack配置
- 3.loader

### $\color{green}{1.webpack起步}$

#### 1.1.webpack安装

```cmd

webpack --version                     //查看webpack版本

npm install webpack@3.6.0 -g          //安装指定版本的webpack(-g表示全局安装)  

npm install webpack@3.6.0 --save-dev  //实际项目中需要局部安装(--save-dev)

webpack ./path/name ./dist/name       //打包目标文件到指定位置

```

#### 1.2.起步demo

**详见目录webpack001文件夹演示:**

>项目构建：
>webpack001
>
>>dist：被打包后的文件
>>src： 源码
>>>main.js    //打包的入口文件
>>>info.js    //测试模块打包（es6 import）
>>>utils.js   //测试模块打包（common.js）
>>
>>index.html   //页面，引入打包后的main.js，未打包的情况下，是不能进行导入导出操作

```git
  <!-- 执行打包命令 -->
  <!-- 打包目标文件到指定位置 -->
  webpack ./src/main.js ./dist/yzb.js
```

### $\color{green}{2.webpack配置}$

#### 2.1.配置webpack指令打包

**$\color{red}{本地项目没有安装webpack,会执行全局webpack打包}$**

- ##### 2.1.1.关于操作

  创建webpack.config.js,让webpack读取此配置文件。

  配置后可以直接命令：webpack进行读取配置，打包。
  >
  demo:

  ```javascript
    // <!-- 执行打包命令 -->
    // <!-- 打包目标文件到指定位置 -->
    webpack ./src/main.js ./dist/yzb.js

    // <!-- 上述可省略如下 -->
    webpack
  ```

- ##### 2.1.2.打包配置信息

  ```javascript
  // node动态获取当前绝对路径（需要node依赖）
  const path = require('path')

  //  webpack会读取此配置
  module.exports = {
    // 入口文件
    entry: './src/main.js',
    // 出口文件
    output: {
      // 打包路径(绝对路径，相对路径报错)
      // path: './dist',//不要使用相对路径，需要node动态获取当前绝对路径
      path: path.resolve(__dirname, 'dist'),
      // path.resolve方法（dir,path）
      //
      // dir:__direname :获取当前绝对路径
      // path:'dist'    :打包后的拼接路径

      // 打包后文件名
      filename: 'yzb.js'
    }
  }
  ```

- ##### 2.2.3.配置node依赖

  $\color{red}{因为打包路径是绝对路径，需要node动态获取当前绝对路径，因此也需要引入node依赖。}$
  >
  ```javascript
  npm init //初始化node

  // case01:
  // 下述为init时填入的信息
  package name: (webpack002配置)    --- 取包名
  description:                      --- 描述信息
  entry point: (webpack.config.js)  --- index.js (随意写目前用不上)
  // 后续直接回车跳过即可

  // case02:
  // 不用填写init信息，全默认
  npm init -y

  // 最后会生成package.json
  ```

#### 2.1.配置 webpack => npm run build 命令映射打包

- ##### 2.1.npm run some 的运行流程

  - $\color{red}{当我们执行如下命令时:}$

    ```javascript
      npm run some
    ```

  - $\color{red}{node会去读配置文件package.json}$
  - $\color{red}{找到script属性下some属性，并运行其后面的指令。}$
  >
  例如：
  【此处为npm run build，对应script下的build,会执行webpack命令】
  >

  ```json
  {
    "name": "meetwebpack",
    "version": "1.0.0",
    "description": "第一次webpack",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
    },
    "author": "",
    "license": "ISC"
  }

  ```

### $\color{green}{3.loader配置}$

#### 3.1.安装loader

  官网：https://www.webpackjs.com/loaders/css-loader/

#### 3.2.使用

  >
  安装：
  
  ```node
    npm install --save-dev css-loader@2.0.2
    npm install --save-dev style-loader
    npm install --save-dev less-loader@4.1.0 less
    npm install --save-dev url-loader@1.1.2
    npm install --save-dev file-loader@3.0.1
    npm install --save-dev  babel-loader@7 babel-core babel-preset-es2015
  ```

  配置：

  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          <!-- 匹配所有.css结尾的文件 -->
          test: /\.css$/,

          <!-- css-loader: -->
          <!-- 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码 -->
          <!-- 只负责加载，不负责引入页面 -->

          <!-- style-loader:将模块的导出作为样式添加到 DOM 中 -->

          <!-- NOTICED:使用多个loader的时候，use是从右往左读取 -->
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          <!-- 匹配所有.less结尾的文件 -->
          test: /\.less$/,

          <!-- 将 css-loader、style-loader 和 less-loader 链式调用，可以把所有样式立即应用于 DOM。 -->
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            <!-- less-loader: -->
            <!-- 加载和转译 LESS 文件 -->
            loader: "less-loader"
          }]
        },
        {
          <!-- 匹配所有png、jpg、gif、jpeg结尾的文件 -->
          test: /\.(png|jpg|gif|jpeg)$/,

          <!--  -->
          use: [{

            loader: 'url-loader',

            options: {
              <!-- url-loader: -->
              <!-- 像 file loader 一样工作，但如果文件小于limit限制，可以返回 data URL，图片编译成base64格式显示 -->

              <!-- file-loader: -->
              <!-- 否则，将执行file-loader，将文件发送到输出文件夹，并返回（相对）URL，进行模块加载 -->
              limit: 8192

              <!-- 对打包图片的命名和路径处理 -->
              <!-- 1.打包后的图片路径：在img文件夹下 -->
              <!-- 2.打包后的文件名：name + hash + ext -->
              <!-- name:原文件名 -->
              <!-- hash：8为哈希值 -->
              <!-- ext:源文件扩展名 -->
              name: 'img/[name].[hash:8].[ext]'
            }
          }]
        },
        {
          // <!-- 匹配所有.js结尾的文件 -->
          test: /\.js$/,
          // include:包含的文件夹
          // exclude:不包含的文件夹
          exclude: /(node_modules|bower_components)/,
          use: {
            // <!-- babel-loader: -->
            // <!-- es6转es5语法 -->
            loader: 'babel-loader',
            options: {
              // presets: ['@babel/preset-env']
              presets: ['es2015']
            }
          }
        }
      ]
    }
  }
  ```

### $\color{green}{4.babel配置}$

#### 4.1.安装loader

```javascript
npm install --save-dev  babel-loader@7 babel-core babel-preset-es2015
```
