const { input, testInput } = require("./day6-input");

exports.processInput = str => {
  const coordArray = str.match(/\d+,\s\d+/g);
  return coordArray.reduce((output, coOrd, index, array) => {
    output.push(coOrd.match(/\d+/g).map(item => +item));
    return output;
  }, []);
};

exports.getManhattan = coOrds => {
  const x = Math.abs(coOrds[0][0] - coOrds[1][0]);
  const y = Math.abs(coOrds[0][1] - coOrds[1][1]);
  return x + y;
};

exports.findClosest = array => {
  return array.reduce((grid, coOrd, index) => {
    const letter = String.fromCharCode(index + 97);
    const distances = [];
    for (x = 0; x <= 9; x++) {
      for (y = 0; y <= 9; y++) {
        getManhattan([x, y], coOrd);
      }
    }
  }, []);
};
