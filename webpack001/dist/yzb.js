/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info__ = __webpack_require__(2);
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
} = __webpack_require__(1)

console.log(add(1, 2))
console.log(mul(2, 3))

// es6 import


console.log(__WEBPACK_IMPORTED_MODULE_0__info__["a" /* userInfo */].name + '-' + __WEBPACK_IMPORTED_MODULE_0__info__["a" /* userInfo */].age)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userInfo; });
/*
 * @Author: zongbao.yao
 * @Date: 2020-08-02 12:05:48
 * @LastEditors: zongbao.yao
 * @LastEditTime: 2020-08-02 12:06:55
 * @Description: 测试引入模块化打包效果
 */

let userInfo = {
  name: 'yzb',
  age: 22
}



/***/ })
/******/ ]);