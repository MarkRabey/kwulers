'use strict';
/**
 * [description]
 * @param  {[type]} rgb [description]
 * @return {[type]}     [description]
 */
export const getCMYKFromRGB = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;


  const k = 1 - Math.max(r, g, b);
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  return [
    Math.round(c * 100) / 100,
    Math.round(m * 100) / 100,
    Math.round(y * 100) / 100,
    Math.round(k * 100) / 100
  ];
};
