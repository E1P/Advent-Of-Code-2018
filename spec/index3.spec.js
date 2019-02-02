const { expect } = require('chai');
const {overlapFinder, fabricArrMaker, formatter} = require('../day3/index3.js');

describe('Day 3', () => {
  describe('Functions', () => {
    it('all should be functions', () => {
      expect(overlapFinder).to.be.a('function');
      expect(fabricArrMaker).to.be.a('function');
      expect(formatter).to.be.a('function');
    });
    it('fabricArrMaker should create an array of arrays with each nested array having same number of elements as outer array', () => {
      const arr = fabricArrMaker(5);
      console.log(arr);
      expect(arr).to.have.length(5);
      expect(arr[5]).to.be.undefined;
      expect(arr[0] && arr [4]).to.have.length(5);
      arr.forEach(arr => {
        console.log(arr);
        arr.forEach(item => {
          console.log(item);
        })
      })
    })
  });
  describe.only('overLapFinder()', () => {
    it('should populate fabric array with \'o\' to represent given claim', () => {
      const fabricArr = fabricArrMaker(8);
      const claim = formatter("#1 @ 1,3: 4x4");
      const outputArr =  [['-','-','-','-','-','-','-','-'],
                          ['-','-','-','-','-','-','-','-'],
                          ['-','-','-','-','-','-','-','-'],
                          ['-','o','o','o','o','-','-','-'],
                          ['-','o','o','o','o','-','-','-'],
                          ['-','o','o','o','o','-','-','-'],
                          ['-','o','o','o','o','-','-','-'],
                          ['-','-','-','-','-','-','-','-']];
      expect(overlapFinder(claim, fabricArr)).to.eql(outputArr);
    })
  })
});
