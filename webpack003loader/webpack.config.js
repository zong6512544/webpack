/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 12:36:06
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 15:14:39
 * @Description: webpack配置文件
 */

// node动态获取当前绝对路径
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
    // resolve方法（dir,path）
    // dir:__direname:获取当前绝对路径
    // path:当前拼接路径

    // 打包后文件名
    filename: 'yzb.js'
  },
  // loader
  module: {
    rules: [{
        // <!-- 匹配所有.css文件结尾的文件 -->
        test: /\.css$/,

        // <!-- css-loader: -->
        // <!-- 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码 -->
        // <!-- 只负责加载，不负责引入页面 -->

        // <!-- style-loader:将模块的导出作为样式添加到 DOM 中 -->

        // <!-- NOTICED:使用多个loader的时候，use是从右往左读取 -->
        use: ['style-loader', 'css-loader']
      },
      {
        // <!-- 匹配所有.less结尾的文件 -->
        test: /\.less$/,
        // <!-- 将 css-loader、style-loader 和 less-loader 链式调用，可以把所有样式立即应用于 DOM。 -->
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}