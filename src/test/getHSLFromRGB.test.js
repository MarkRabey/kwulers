import { expect } from 'chai';

import { getHSLFromRGB } from '../getHSLFromRGB';

describe('getHSLFromRGB', () => {
  it('should return an array of hsl values for the given rgb value', () => {
    const rgb = [0,0,255];
    expect(getHSLFromRGB(rgb)).to.deep.equal([240,100,50]);
  });
});