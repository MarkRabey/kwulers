'use strict';
import { getRGBFromHex } from './getRGBFromHex';
import { getCMYKFromRGB } from './getCMYKFromRGB';

/**
 * [description]
 * @param  {[type]} hex [description]
 * @return {[type]}     [description]
 */
export const getCMYKFromHex = (hex) => {
  const rgb = getRGBFromHex(hex);
  return getCMYKFromRGB(rgb);
}