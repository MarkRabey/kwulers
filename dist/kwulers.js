(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("kwulers", [], factory);
	else if(typeof exports === 'object')
		exports["kwulers"] = factory();
	else
		root["kwulers"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/kwulers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/getCSSFromRGB.js":
/*!******************************!*\
  !*** ./src/getCSSFromRGB.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [description]
 * @param  {[type]} rgb [description]
 * @return {[type]}     [description]
 */
var getCSSFromRGB = exports.getCSSFromRGB = function getCSSFromRGB(rgb) {
  return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
};

/***/ }),

/***/ "./src/getCSSFromRGBA.js":
/*!*******************************!*\
  !*** ./src/getCSSFromRGBA.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [description]
 * @param  {[type]} rgba [description]
 * @return {[type]}      [description]
 */
var getCSSFromRGBA = exports.getCSSFromRGBA = function getCSSFromRGBA(rgba) {
  return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3].toFixed(2) + ")";
};

/***/ }),

/***/ "./src/getHexFromRGB.js":
/*!******************************!*\
  !*** ./src/getHexFromRGB.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [description]
 * @param  {[type]} rgb [description]
 * @return {[type]}     [description]
 */
var getHexFromRGB = exports.getHexFromRGB = function getHexFromRGB(rgb) {
  var hex = [Number(rgb[0]).toString(16), Number(rgb[1]).toString(16), Number(rgb[2]).toString(16)];

  for (var i = 0; i < 3; i++) {
    if (hex[i] < 10 || hex[i].length === 1) {
      hex[i] = '#' + hex[i];
    }
  }

  return '#' + hex.join('').toUpperCase();
};

/***/ }),

/***/ "./src/kwulers.js":
/*!************************!*\
  !*** ./src/kwulers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHexFromRGB = exports.getCSSFromRGBA = exports.getCSSFromRGB = undefined;

var _getCSSFromRGB = __webpack_require__(/*! ./getCSSFromRGB */ "./src/getCSSFromRGB.js");

var _getCSSFromRGBA = __webpack_require__(/*! ./getCSSFromRGBA */ "./src/getCSSFromRGBA.js");

var _getHexFromRGB = __webpack_require__(/*! ./getHexFromRGB */ "./src/getHexFromRGB.js");

exports.getCSSFromRGB = _getCSSFromRGB.getCSSFromRGB;
exports.getCSSFromRGBA = _getCSSFromRGBA.getCSSFromRGBA;
exports.getHexFromRGB = _getHexFromRGB.getHexFromRGB;
exports.default = {
  getCSSFromRGB: _getCSSFromRGB.getCSSFromRGB,
  getCSSFromRGBA: _getCSSFromRGBA.getCSSFromRGBA,
  getHexFromRGB: _getHexFromRGB.getHexFromRGB
};

/***/ })

/******/ });
});
//# sourceMappingURL=kwulers.js.map