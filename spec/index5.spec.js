const { expect } = require('chai');
const { polymerDestroyer} = require('../day5/index5');

describe.only('day 5', () => {
  describe('polymerDestroyer()', () => {
    it('takes a string with 2 matching letters of opposing polarity and returns 0', () => {
      expect(polymerDestroyer('Aa')).to.equal(0);
    });
    it('takes a string with 4 matching letters of opposing polarity and returns 0', () => {
      expect(polymerDestroyer('AabB')).to.equal(0);
    });
    it('2 matching letters of opposing polarity placed outside 2 others returns 0', () => {
      expect(polymerDestroyer('abBA')).to.equal(0);
    });
    it('returns 2 when given 4-letter string with only one polarity match', () => {
      expect(polymerDestroyer('ZxXy')).to.equal(2);
    })
    it('returns 10 for 16-char string with only three possible matches', () => {
      expect(polymerDestroyer('dabAcCaCBAcCcaDA')).to.equal(10);
    })
  });
});