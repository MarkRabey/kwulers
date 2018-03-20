'use strict';
/**
 * [description]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
export const getRGBFromHex = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  let num = parseInt(hex, 16);
  return [num >> 16, num >> 8 & 255, num & 255];
}