/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 11:55:46
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 12:14:28
 * @Description: 测试引入模块化打包效果
 */

//  common.js
const {
  add,
  mul
} = require('./utils')

console.log(add(1, 2))
console.log(mul(2, 3))

// es6 import
import {
  userInfo
} from './info'

console.log(userInfo.name + '-' + userInfo.age)