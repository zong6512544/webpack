/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 11:55:46
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 15:08:14
 * @Description: 测试引入模块化打包效果
 */

//  1.common.js
const {
  add,
  mul
} = require('./js/utils')

console.log(add(1, 2))
console.log(mul(2, 3))

// 2.es6 import
import {
  userInfo
} from './js/info'

console.log(userInfo.name + '-' + userInfo.age)

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less,sass文件
require('./css/special.less')