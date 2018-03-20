/**
 * [description]
 * @param  {[type]} rgb [description]
 * @return {[type]}     [description]
 */
export const getHSLFromRGB = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
  const delta = max - min;
  let h, s, l;

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
}
