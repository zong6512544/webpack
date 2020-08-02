/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 11:59:13
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 12:05:24
 * @Description: 测试模块化引入后打包的效果
 */

function add(sum1, sum2) {
  return sum1 + sum2
}

function mul(sum1, sum2) {
  return sum1 * sum2
}

// common.js
module.exports = {
  add,
  mul
}