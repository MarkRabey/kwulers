'use strict';
import { namedColours } from './lib/namedColours';

/**
 * [description]
 * @param  {[type]} name [description]
 * @return {[type]}     [description]
 */
export const getHexFromName = (name) => {
  if (typeof namedColours[name.toLowerCase()] !== undefined) {
    return namedColours[name.toLowerCase()].toUpperCase();
  }

  return false;
}