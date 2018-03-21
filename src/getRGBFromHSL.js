'use strict';
/**
 * [description]
 * @param  {[type]} hsl [description]
 * @return {[type]}     [description]
 */
export const getRGBFromHSL = (hsl) => {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  if (s == 0) {
    return [l, l, l];
  }

  var temp2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var temp1 = 2 * l - temp2;

  const rtemp = (h + 1 / 3) % 1;
  const gtemp = h;
  const btemp = (h + 2 / 3) % 1;
  const rgb = [rtemp, gtemp, btemp];

  let value;

  for (let i = 0; i < 3; ++i) {
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
