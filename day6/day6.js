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
