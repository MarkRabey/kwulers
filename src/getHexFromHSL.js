'use strict';
import { getRGBFromHSL } from './getRGBFromHSL';
import { getHexFromRGB } from './getHexFromRGB';

/**
 * [description]
 * @param  {[type]} hsl [description]
 * @return {[type]}     [description]
 */
export const getHexFromHSL = (hsl) => {
  const rgb = getRGBFromHSL(hsl);
  return getHexFromRGB(rgb);
}