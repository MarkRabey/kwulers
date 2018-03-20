import { expect } from 'chai';

import { getCSSFromRGB } from '../getCSSFromRGB';

describe('getCSSFromRGB', () => {
  it('should return a CSS `rgb` value for the given input', () => {
    const rgb = [255,255,255];
    expect(getCSSFromRGB(rgb)).to.equal('rgb(255, 255, 255)');
  });
});