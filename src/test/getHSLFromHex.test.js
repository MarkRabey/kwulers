import { expect } from 'chai';

import { getHSLFromHex } from '../getHSLFromHex';

describe('getHSLFromHex', () => {
  it('should return an array of hsl values for the given hex value', () => {
    const hex = '#0000FF';
    expect(getHSLFromHex(hex)).to.deep.equal([240,100,50]);
  });
});