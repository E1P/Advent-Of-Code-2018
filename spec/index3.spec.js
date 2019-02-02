const { expect } = require('chai');
const { overlapFinder, fabricArrMaker, formatter, claimsChecker } = require('../day3/index3.js');

describe('Day 3', () => {
  describe('Functions', () => {
    it('all should be functions', () => {
      expect(overlapFinder).to.be.a('function');
      expect(fabricArrMaker).to.be.a('function');
      expect(formatter).to.be.a('function');
    });
    it('fabricArrMaker should create an array of arrays with each nested array having same number of elements as outer array', () => {
      const arr = fabricArrMaker(5);
      expect(arr).to.have.length(5);
      expect(arr[5]).to.be.undefined;
      expect(arr[0] && arr [4]).to.have.length(5);
    })
  });
  describe('overLapFinder()', () => {
    it('should populate fabric array with claim number to represent given claim', () => {
      const fabricArr = fabricArrMaker(8);
      const claim = formatter("#1 @ 1,3: 4x4");
      const outputArr =  [['.','.','.','.','.','.','.','.'],
                          ['.','.','.','.','.','.','.','.'],
                          ['.','.','.','.','.','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','.','.','.','.','.','.','.']];
      expect(overlapFinder(claim, fabricArr)).to.eql(outputArr);
    });
    it('should populate fabric array with claim number representing two non-overlapping claims', () => {
      const fabricArr = fabricArrMaker(8);
      const claim = formatter("#1 @ 1,3: 4x4\n#3 @ 5,5: 2x2");
      const outputArr =  [['.','.','.','.','.','.','.','.'],
                          ['.','.','.','.','.','.','.','.'],
                          ['.','.','.','.','.','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','1','1','1','1','.','.','.'],
                          ['.','1','1','1','1','3','3','.'],
                          ['.','1','1','1','1','3','3','.'],
                          ['.','.','.','.','.','.','.','.']];
      expect(overlapFinder(claim, fabricArr)).to.eql(outputArr);
    });
    it('should populate fabric array with three claims, representing overlaps with \'X\'', () => {
      const fabricArr = fabricArrMaker(8);
      const claim = formatter("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2");
      const outputArr =  [['.','.','.','.','.','.','.','.'],
                          ['.','.','.','2','2','2','2','.'],
                          ['.','.','.','2','2','2','2','.'],
                          ['.','1','1','x','x','2','2','.'],
                          ['.','1','1','x','x','2','2','.'],
                          ['.','1','1','1','1','3','3','.'],
                          ['.','1','1','1','1','3','3','.'],
                          ['.','.','.','.','.','.','.','.']];
      expect(overlapFinder(claim, fabricArr)).to.eql(outputArr);
    });
  });
  describe('claimsChecker', () => {
    it('should check every claim against result and return non-overlapped claim', () => {
      const fabricArr = fabricArrMaker(8);
      const claims = formatter("#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2");
      const markedFabric = overlapFinder(claims, fabricArr);
      expect(claimsChecker(claims, markedFabric)).to.equal('3');
    })
  })
});
