import { expect } from 'chai';

import { getRGBFromRGBA } from '../getRGBFromRGBA';

describe('getRGBFromRGBA', () => {
  it('should return an array of rgb values for the given rgba value', () => {
    const rgba = [255,255,255,1];
    expect(getRGBFromRGBA(rgba)).to.deep.equal([255,255,255]);
  });
});