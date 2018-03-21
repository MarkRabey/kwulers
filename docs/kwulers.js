/*!
 * @name Kwulers v0.1.0
 * @license MIT
 * @copyright (c) 2018 Mark Rabey
 * @author Mark Rabey <mark@markrabey.com> (https://markrabey.com)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.kwulers = {})));
}(this, (function (exports) { 'use strict';

  /**
   * [description]
   * @param  {[type]} rgb [description]
   * @return {[type]}     [description]
   */

  var getCSSFromRGB = function getCSSFromRGB(rgb) {
    return 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
  };

  /**
   * [description]
   * @param  {[type]} rgba [description]
   * @return {[type]}      [description]
   */

  var getCSSFromRGBA = function getCSSFromRGBA(rgba) {
    return 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3].toFixed(2) + ')';
  };

  /**
   * [description]
   * @param  {[type]} rgb [description]
   * @return {[type]}     [description]
   */

  var getHexFromRGB = function getHexFromRGB(rgb) {
    var hex = [Number(rgb[0]).toString(16), Number(rgb[1]).toString(16), Number(rgb[2]).toString(16)];

    for (var i = 0; i < 3; i++) {
      if (hex[i] < 10 || hex[i].length === 1) {
        hex[i] = '0' + hex[i];
      }
    }

    return '#' + hex.join('').toUpperCase();
  };

  var namedColours = {
    'aliceblue': '#f0f8ff',
    'antiquewhite': '#faebd7',
    'aqua': '#00ffff',
    'aquamarine': '#7fffd4',
    'azure': '#f0ffff',
    'beige': '#f5f5dc',
    'bisque': '#ffe4c4',
    'black': '#000000',
    'blanchedalmond': '#ffebcd',
    'blue': '#0000ff',
    'blueviolet': '#8a2be2',
    'brown': '#a52a2a',
    'burlywood': '#deb887',
    'cadetblue': '#5f9ea0',
    'chartreuse': '#7fff00',
    'chocolate': '#d2691e',
    'coral': '#ff7f50',
    'cornflowerblue': '#6495ed',
    'cornsilk': '#fff8dc',
    'crimson': '#dc143c',
    'cyan': '#00ffff',
    'darkblue': '#00008b',
    'darkcyan': '#008b8b',
    'darkgoldenrod': '#b8860b',
    'darkgray': '#a9a9a9',
    'darkgreen': '#006400',
    'darkkhaki': '#bdb76b',
    'darkmagenta': '#8b008b',
    'darkolivegreen': '#556b2f',
    'darkorange': '#ff8c00',
    'darkorchid': '#9932cc',
    'darkred': '#8b0000',
    'darksalmon': '#e9967a',
    'darkseagreen': '#8fbc8f',
    'darkslateblue': '#483d8b',
    'darkslategray': '#2f4f4f',
    'darkturquoise': '#00ced1',
    'darkviolet': '#9400d3',
    'deeppink': '#ff1493',
    'deepskyblue': '#00bfff',
    'dimgray': '#696969',
    'dodgerblue': '#1e90ff',
    'firebrick': '#b22222',
    'floralwhite': '#fffaf0',
    'forestgreen': '#228b22',
    'fuchsia': '#ff00ff',
    'gainsboro': '#dcdcdc',
    'ghostwhite': '#f8f8ff',
    'gold': '#ffd700',
    'goldenrod': '#daa520',
    'gray': '#808080',
    'green': '#008000',
    'greenyellow': '#adff2f',
    'honeydew': '#f0fff0',
    'hotpink': '#ff69b4',
    'indianred ': '#cd5c5c',
    'indigo': '#4b0082',
    'ivory': '#fffff0',
    'khaki': '#f0e68c',
    'lavender': '#e6e6fa',
    'lavenderblush': '#fff0f5',
    'lawngreen': '#7cfc00',
    'lemonchiffon': '#fffacd',
    'lightblue': '#add8e6',
    'lightcoral': '#f08080',
    'lightcyan': '#e0ffff',
    'lightgoldenrodyellow': '#fafad2',
    'lightgrey': '#d3d3d3',
    'lightgreen': '#90ee90',
    'lightpink': '#ffb6c1',
    'lightsalmon': '#ffa07a',
    'lightseagreen': '#20b2aa',
    'lightskyblue': '#87cefa',
    'lightslategray': '#778899',
    'lightsteelblue': '#b0c4de',
    'lightyellow': '#ffffe0',
    'lime': '#00ff00',
    'limegreen': '#32cd32',
    'linen': '#faf0e6',
    'magenta': '#ff00ff',
    'maroon': '#800000',
    'mediumaquamarine': '#66cdaa',
    'mediumblue': '#0000cd',
    'mediumorchid': '#ba55d3',
    'mediumpurple': '#9370d8',
    'mediumseagreen': '#3cb371',
    'mediumslateblue': '#7b68ee',
    'mediumspringgreen': '#00fa9a',
    'mediumturquoise': '#48d1cc',
    'mediumvioletred': '#c71585',
    'midnightblue': '#191970',
    'mintcream': '#f5fffa',
    'mistyrose': '#ffe4e1',
    'moccasin': '#ffe4b5',
    'navajowhite': '#ffdead',
    'navy': '#000080',
    'oldlace': '#fdf5e6',
    'olive': '#808000',
    'olivedrab': '#6b8e23',
    'orange': '#ffa500',
    'orangered': '#ff4500',
    'orchid': '#da70d6',
    'palegoldenrod': '#eee8aa',
    'palegreen': '#98fb98',
    'paleturquoise': '#afeeee',
    'palevioletred': '#d87093',
    'papayawhip': '#ffefd5',
    'peachpuff': '#ffdab9',
    'peru': '#cd853f',
    'pink': '#ffc0cb',
    'plum': '#dda0dd',
    'powderblue': '#b0e0e6',
    'purple': '#800080',
    'rebeccapurple': '#663399',
    'red': '#ff0000',
    'rosybrown': '#bc8f8f',
    'royalblue': '#4169e1',
    'saddlebrown': '#8b4513',
    'salmon': '#fa8072',
    'sandybrown': '#f4a460',
    'seagreen': '#2e8b57',
    'seashell': '#fff5ee',
    'sienna': '#a0522d',
    'silver': '#c0c0c0',
    'skyblue': '#87ceeb',
    'slateblue': '#6a5acd',
    'slategray': '#708090',
    'snow': '#fffafa',
    'springgreen': '#00ff7f',
    'steelblue': '#4682b4',
    'tan': '#d2b48c',
    'teal': '#008080',
    'thistle': '#d8bfd8',
    'tomato': '#ff6347',
    'turquoise': '#40e0d0',
    'violet': '#ee82ee',
    'wheat': '#f5deb3',
    'white': '#ffffff',
    'whitesmoke': '#f5f5f5',
    'yellow': '#ffff00',
    'yellowgreen': '#9acd32'
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * [description]
   * @param  {[type]} name [description]
   * @return {[type]}     [description]
   */
  var getHexFromName = function getHexFromName(name) {
    if (_typeof(namedColours[name.toLowerCase()]) !== undefined) {
      return namedColours[name.toLowerCase()].toUpperCase();
    }

    return false;
  };

  /**
   * [description]
   * @param  {[type]} rgba [description]
   * @return {[type]}      [description]
   */

  var getRGBFromRGBA = function getRGBFromRGBA(rgba) {
    return [rgba[0], rgba[1], rgba[2]];
  };

  /**
   * [description]
   * @param  {[type]} hex [description]
   * @return {[type]}     [description]
   */

  var getRGBFromHex = function getRGBFromHex(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var num = parseInt(hex, 16);
    return [num >> 16, num >> 8 & 255, num & 255];
  };

  /**
   * [description]
   * @param  {[type]} rgb [description]
   * @return {[type]}     [description]
   */

  var getHSLFromRGB = function getHSLFromRGB(rgb) {
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

  /**
   * [description]
   * @param  {[type]} hsl [description]
   * @return {[type]}     [description]
   */

  var getRGBFromHSL = function getRGBFromHSL(hsl) {
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

  /**
   * [description]
   * @param  {[type]} hex [description]
   * @return {[type]}     [description]
   */
  var getHSLFromHex = function getHSLFromHex(hex) {
    var rgb = getRGBFromHex(hex);
    return getHSLFromRGB(rgb);
  };

  /**
   * [description]
   * @param  {[type]} hsl [description]
   * @return {[type]}     [description]
   */
  var getHexFromHSL = function getHexFromHSL(hsl) {
    var rgb = getRGBFromHSL(hsl);
    return getHexFromRGB(rgb);
  };

  /**
   * [description]
   * @param  {[type]} rgb [description]
   * @return {[type]}     [description]
   */

  var getCMYKFromRGB = function getCMYKFromRGB(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;

    var k = 1 - Math.max(r, g, b);
    var c = (1 - r - k) / (1 - k);
    var m = (1 - g - k) / (1 - k);
    var y = (1 - b - k) / (1 - k);

    return [Math.round(c * 100) / 100, Math.round(m * 100) / 100, Math.round(y * 100) / 100, Math.round(k * 100) / 100];
  };

  /**
   * [description]
   * @param  {[type]} hex [description]
   * @return {[type]}     [description]
   */
  var getCMYKFromHex = function getCMYKFromHex(hex) {
    var rgb = getRGBFromHex(hex);
    return getCMYKFromRGB(rgb);
  };

  var kwulers = {
    getCSSFromRGB: getCSSFromRGB,
    getCSSFromRGBA: getCSSFromRGBA,
    getHexFromRGB: getHexFromRGB,
    getHexFromName: getHexFromName,
    getRGBFromRGBA: getRGBFromRGBA,
    getRGBFromHex: getRGBFromHex,
    getHSLFromRGB: getHSLFromRGB,
    getRGBFromHSL: getRGBFromHSL,
    getHSLFromHex: getHSLFromHex,
    getHexFromHSL: getHexFromHSL,
    getCMYKFromRGB: getCMYKFromRGB,
    getCMYKFromHex: getCMYKFromHex
  };

  exports.getCSSFromRGB = getCSSFromRGB;
  exports.getCSSFromRGBA = getCSSFromRGBA;
  exports.getHexFromRGB = getHexFromRGB;
  exports.getHexFromName = getHexFromName;
  exports.getRGBFromRGBA = getRGBFromRGBA;
  exports.getRGBFromHex = getRGBFromHex;
  exports.getHSLFromRGB = getHSLFromRGB;
  exports.getRGBFromHSL = getRGBFromHSL;
  exports.getHSLFromHex = getHSLFromHex;
  exports.getHexFromHSL = getHexFromHSL;
  exports.getCMYKFromRGB = getCMYKFromRGB;
  exports.getCMYKFromHex = getCMYKFromHex;
  exports.default = kwulers;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=kwulers.js.map
