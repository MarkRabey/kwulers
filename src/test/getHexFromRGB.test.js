import { expect } from 'chai';

import { getHexFromRGB } from '../getHexFromRGB';

describe('getHexFromRGB', () => {
  it('should return a CSS hex value for the given input', () => {
    const rgb = [255,255,255];
    expect(getHexFromRGB(rgb)).to.equal('#FFFFFF');
  });
});