import { expect } from 'chai';

import { getRGBFromHex } from '../getRGBFromHex';

describe('getRGBFromHex', () => {
  it('should return an array of rgb values for the given hex value', () => {
    const hex = '#FFFFFF';
    expect(getRGBFromHex(hex)).to.deep.equal([255,255,255]);
  });
});