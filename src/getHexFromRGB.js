/**
 * [description]
 * @param  {[type]} rgb [description]
 * @return {[type]}     [description]
 */
export const getHexFromRGB = (rgb) => {
  const hex = [
    Number(rgb[0]).toString(16),
    Number(rgb[1]).toString(16),
    Number(rgb[2]).toString(16),
  ];

  for (let i = 0; i < 3; i++) {
    if (hex[i] < 10 || hex[i].length === 1) {
      hex[i] = `0${ hex[i] }`;
    }
  }

  return `#${ hex.join('').toUpperCase() }`;
}