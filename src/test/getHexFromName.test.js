import { expect } from 'chai';

import { getHexFromName } from '../getHexFromName';

describe('getHexFromName', () => {
  it('should return a CSS hex value for the given named colour input', () => {
    const name = 'mediumaquamarine';
    expect(getHexFromName(name)).to.equal('#66CDAA');
  });
});