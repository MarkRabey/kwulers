import { expect } from 'chai';

import { getRGBFromHSL } from '../getRGBFromHSL';

describe('getRGBFromHSL', () => {
  it('should return an array of rgb values for the given hsl value', () => {
    const hsl = [240,100,50];
    expect(getRGBFromHSL(hsl)).to.deep.equal([0,0,255]);
  });
});