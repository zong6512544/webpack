/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 12:36:06
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 13:03:07
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
  }
}