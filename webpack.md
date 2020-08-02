# webpack 入门

## $\color{purple}{学习内容：}$

1.webpack安装

$\color{green}{1.webpack安装：}$

1.1.关于指令：

```cmd

webpack --version               //查看webpack版本

npm install webpack@3.6.0 -g    //安装指定版本的webpack(-g表示全局安装)  
                                //实际项目中需要局部安装(--save-dev)

webpack ./path/name ./dist/name     //打包目标文件到指定位置

```

1.2.demo:

详见目录webpack001文件夹演示

>项目构建：
>webpack001
>
>>dist：被打包后的文件
>>src： 源码
>>>main.js    //打包的入口文件
>>>info.js    //测试模块打包（es6 import）
>>>utils.js   //测试模块打包（common.js）
>
>index.html   //页面，引入打包后的main.js，未打包的情况下，是不能进行导入导出操作
