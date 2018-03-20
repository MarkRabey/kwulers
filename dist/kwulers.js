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

/***/ "./src/getCMYKFromRGB.js":
/*!*******************************!*\
  !*** ./src/getCMYKFromRGB.js ***!
  \*******************************/
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
var getCMYKFromRGB = exports.getCMYKFromRGB = function getCMYKFromRGB(rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;

  var k = 1 - Math.max(r, g, b);
  var c = (1 - r - k) / (1 - k);
  var m = (1 - g - k) / (1 - k);
  var y = (1 - b - k) / (1 - k);

  return [Math.round(c * 100) / 100, Math.round(m * 100) / 100, Math.round(y * 100) / 100, Math.round(k * 100) / 100];
};

/***/ }),

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

/***/ "./src/getHSLFromHex.js":
/*!******************************!*\
  !*** ./src/getHSLFromHex.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHSLFromHex = undefined;

var _getRGBFromHex = __webpack_require__(/*! ./getRGBFromHex */ "./src/getRGBFromHex.js");

var _getHSLFromRGB = __webpack_require__(/*! ./getHSLFromRGB */ "./src/getHSLFromRGB.js");

/**
 * [description]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
var getHSLFromHex = exports.getHSLFromHex = function getHSLFromHex(hex) {
  var rgb = (0, _getRGBFromHex.getRGBFromHex)(hex);
  return (0, _getHSLFromRGB.getHSLFromRGB)(rgb);
};

/***/ }),

/***/ "./src/getHSLFromRGB.js":
/*!******************************!*\
  !*** ./src/getHSLFromRGB.js ***!
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
var getHSLFromRGB = exports.getHSLFromRGB = function getHSLFromRGB(rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;

  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h = void 0,
      s = void 0,
      l = void 0;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);
  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - min - max);
  }

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
};

/***/ }),

/***/ "./src/getHexFromHSL.js":
/*!******************************!*\
  !*** ./src/getHexFromHSL.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHexFromHSL = undefined;

var _getRGBFromHSL = __webpack_require__(/*! ./getRGBFromHSL */ "./src/getRGBFromHSL.js");

var _getHexFromRGB = __webpack_require__(/*! ./getHexFromRGB */ "./src/getHexFromRGB.js");

/**
 * [description]
 * @param  {[type]} hsl [description]
 * @return {[type]}     [description]
 */
var getHexFromHSL = exports.getHexFromHSL = function getHexFromHSL(hsl) {
  var rgb = (0, _getRGBFromHSL.getRGBFromHSL)(hsl);
  return (0, _getHexFromRGB.getHexFromRGB)(rgb);
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

/***/ "./src/getRGBFromHSL.js":
/*!******************************!*\
  !*** ./src/getRGBFromHSL.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [description]
 * @param  {[type]} hsl [description]
 * @return {[type]}     [description]
 */
var getRGBFromHSL = exports.getRGBFromHSL = function getRGBFromHSL(hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;

  if (s == 0) {
    return [l, l, l];
  }

  var temp2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var temp1 = 2 * l - temp2;

  var rtemp = (h + 1 / 3) % 1;
  var gtemp = h;
  var btemp = (h + 2 / 3) % 1;
  var rgb = [rtemp, gtemp, btemp];

  var value = void 0;

  for (var i = 0; i < 3; ++i) {
    if (rgb[i] < 1 / 6) {
      value = temp1 + (temp2 - temp1) * 6 * rgb[i];
    } else if (rgb[i] < 1 / 2) {
      value = temp2;
    } else if (rgb[i] < 2 / 3) {
      value = temp1 + (temp2 - temp1) * 6 * (2 / 3 - rgb[i]);
    } else {
      value = temp1;
    }

    rgb[i] = value * 255;
  }

  return rgb;
};

/***/ }),

/***/ "./src/getRGBFromHex.js":
/*!******************************!*\
  !*** ./src/getRGBFromHex.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [description]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
var getRGBFromHex = exports.getRGBFromHex = function getRGBFromHex(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var num = parseInt(hex, 16);
  return [num >> 16, num >> 8 & 255, num & 255];
};

/***/ }),

/***/ "./src/getRGBFromRGBA.js":
/*!*******************************!*\
  !*** ./src/getRGBFromRGBA.js ***!
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
var getRGBFromRGBA = exports.getRGBFromRGBA = function getRGBFromRGBA(rgba) {
  return [rgba[0], rgba[1], rgba[2]];
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
exports.getCMYKFromRGB = exports.getHexFromHSL = exports.getHSLFromHex = exports.getRGBFromHSL = exports.getHSLFromRGB = exports.getRGBFromHex = exports.getRGBFromRGBA = exports.getHexFromRGB = exports.getCSSFromRGBA = exports.getCSSFromRGB = undefined;

var _getCSSFromRGB = __webpack_require__(/*! ./getCSSFromRGB */ "./src/getCSSFromRGB.js");

var _getCSSFromRGBA = __webpack_require__(/*! ./getCSSFromRGBA */ "./src/getCSSFromRGBA.js");

var _getHexFromRGB = __webpack_require__(/*! ./getHexFromRGB */ "./src/getHexFromRGB.js");

var _getRGBFromRGBA = __webpack_require__(/*! ./getRGBFromRGBA */ "./src/getRGBFromRGBA.js");

var _getRGBFromHex = __webpack_require__(/*! ./getRGBFromHex */ "./src/getRGBFromHex.js");

var _getHSLFromRGB = __webpack_require__(/*! ./getHSLFromRGB */ "./src/getHSLFromRGB.js");

var _getRGBFromHSL = __webpack_require__(/*! ./getRGBFromHSL */ "./src/getRGBFromHSL.js");

var _getHSLFromHex = __webpack_require__(/*! ./getHSLFromHex */ "./src/getHSLFromHex.js");

var _getHexFromHSL = __webpack_require__(/*! ./getHexFromHSL */ "./src/getHexFromHSL.js");

var _getCMYKFromRGB = __webpack_require__(/*! ./getCMYKFromRGB */ "./src/getCMYKFromRGB.js");

exports.getCSSFromRGB = _getCSSFromRGB.getCSSFromRGB;
exports.getCSSFromRGBA = _getCSSFromRGBA.getCSSFromRGBA;
exports.getHexFromRGB = _getHexFromRGB.getHexFromRGB;
exports.getRGBFromRGBA = _getRGBFromRGBA.getRGBFromRGBA;
exports.getRGBFromHex = _getRGBFromHex.getRGBFromHex;
exports.getHSLFromRGB = _getHSLFromRGB.getHSLFromRGB;
exports.getRGBFromHSL = _getRGBFromHSL.getRGBFromHSL;
exports.getHSLFromHex = _getHSLFromHex.getHSLFromHex;
exports.getHexFromHSL = _getHexFromHSL.getHexFromHSL;
exports.getCMYKFromRGB = _getCMYKFromRGB.getCMYKFromRGB;
exports.default = {
  getCSSFromRGB: _getCSSFromRGB.getCSSFromRGB,
  getCSSFromRGBA: _getCSSFromRGBA.getCSSFromRGBA,
  getHexFromRGB: _getHexFromRGB.getHexFromRGB,
  getRGBFromRGBA: _getRGBFromRGBA.getRGBFromRGBA,
  getRGBFromHex: _getRGBFromHex.getRGBFromHex,
  getHSLFromRGB: _getHSLFromRGB.getHSLFromRGB,
  getRGBFromHSL: _getRGBFromHSL.getRGBFromHSL,
  getHSLFromHex: _getHSLFromHex.getHSLFromHex,
  getHexFromHSL: _getHexFromHSL.getHexFromHSL,
  getCMYKFromRGB: _getCMYKFromRGB.getCMYKFromRGB
};

/***/ })

/******/ });
});
//# sourceMappingURL=kwulers.js.map