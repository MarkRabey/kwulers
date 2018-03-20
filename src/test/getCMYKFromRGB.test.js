import { expect } from 'chai';

import { getCMYKFromRGB } from '../getCMYKFromRGB';

describe('getCMYKFromRGB', () => {
  it('should return an array of CMYK values for the given rgb value', () => {
    const rgb = [200,150,100];
    expect(getCMYKFromRGB(rgb)).to.deep.equal([0, 0.25, 0.5, 0.22]);
  });
});