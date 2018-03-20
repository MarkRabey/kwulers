'use strict';
/**
 * [description]
 * @param  {[type]} rgba [description]
 * @return {[type]}      [description]
 */
export const getCSSFromRGBA = (rgba) => {
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3].toFixed(2)})`
}