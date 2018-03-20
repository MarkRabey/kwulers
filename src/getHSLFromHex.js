'use strict';
import { getRGBFromHex } from './getRGBFromHex';
import { getHSLFromRGB } from './getHSLFromRGB';

/**
 * [description]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
export const getHSLFromHex = (hex) => {
  const rgb = getRGBFromHex(hex);
  return getHSLFromRGB(rgb);
}