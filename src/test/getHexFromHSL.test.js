import { expect } from 'chai';

import { getHexFromHSL } from '../getHexFromHSL';

describe('getHexFromHSL', () => {
  it('should return the hex value for the given hsl value', () => {
    const hsl = [240,100,50];
    expect(getHexFromHSL(hsl)).to.equal('#0000FF');
  });
});