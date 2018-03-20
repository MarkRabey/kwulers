import { expect } from 'chai';

import { getCMYKFromHex } from '../getCMYKFromHex';

describe('getCMYKFromHex', () => {
  it('should return an array of CMYK values for the given hex value', () => {
    const hex = '#326496';
    expect(getCMYKFromHex(hex)).to.deep.equal([0.67, 0.33, 0, 0.41]);
  });
});