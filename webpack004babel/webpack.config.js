/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 12:36:06
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 16:46:18
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
    filename: 'yzb.js',

    // <!-- file-loader: -->
    publicPath: 'dist/'
  },
  // loader
  module: {
    rules: [{
        // <!-- 匹配所有.css结尾的文件 -->
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
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          // <!-- less-loader: -->
          // <!-- 加载和转译 LESS 文件 -->
          loader: "less-loader"
        }]
      },
      {
        // <!-- 匹配所有png、jpg、gif、jpeg结尾的文件 -->
        test: /\.(png|jpg|gif|jpeg)$/,

        // <!--  -->
        use: [{

          loader: 'url-loader',

          options: {
            // <!-- url-loader: -->
            // <!-- 像 file loader 一样工作，但如果文件小于limit限制，可以返回 data URL，图片编译成base64格式显示 -->

            // <!-- file-loader: -->
            // <!-- 否则，将执行file-loader，将文件发送到输出文件夹，并返回（相对）URL，进行模块加载 -->
            limit: 8196,

            // <!-- 对打包图片的命名和路径处理 -->
            // <!-- 1.打包后的图片路径：在img文件夹下 -->
            // <!-- 2.打包后的文件名：name + hash + ext -->
            // <!-- name:原文件名 -->
            // <!-- hash：8为哈希值 -->
            // <!-- ext:源文件扩展名 -->
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