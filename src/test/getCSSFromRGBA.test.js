import { expect } from 'chai';

import { getCSSFromRGBA } from '../getCSSFromRGBA';

describe('getCSSFromRGBA', () => {
  it('should return a CSS `rgba` value for the given input', () => {
    const rgba = [255,255,255, 0.8];
    expect(getCSSFromRGBA(rgba)).to.equal('rgba(255, 255, 255, 0.80)');
  });
});