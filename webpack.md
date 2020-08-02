# webpack 入门

## $\color{purple}{学习内容：}$

- 1.webpack起步
- 2.webpack配置

### $\color{green}{1.webpack起步}$

#### 1.1.webpack安装

```cmd

webpack --version               //查看webpack版本

npm install webpack@3.6.0 -g    //安装指定版本的webpack(-g表示全局安装)  
                                //实际项目中需要局部安装(--save-dev)

webpack ./path/name ./dist/name     //打包目标文件到指定位置

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

#### 2.1.配置

- #### 2.1.1.关于操作

  创建webpack.config.js,让webpack读取此配置文件

  配置后可以直接命令：webpack进行读取配置，打包

  demo:

  ```javascript
    // <!-- 执行打包命令 -->
    // <!-- 打包目标文件到指定位置 -->
    webpack ./src/main.js ./dist/yzb.js

    // <!-- 上述可省略如下 -->
    webpack
  ```

- #### 2.1.2.打包配置信息

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

### 2.2.注意

- #### 2.2.1.配置node依赖

  因为打包路径是绝对路径，需要node动态获取当前绝对路径，因此也需要引入node依赖。

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
