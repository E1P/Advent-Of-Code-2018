const { input, testInput } = require("./day6-input");

// const testInput = "1, 1 1, 6 8, 3 3, 4 5, 5 8, 9";

const processInput = str => {
  const coordArray = str.match(/\d+,\s\d+/g);
  console.log(coordArray);
  return coordArray.reduce((output, coOrd, index, array) => {
    console.log("CoOrd: ", coOrd);
    if (index === 1) console.log(array);
    output.push(coOrd.match(/\d+/g));
    return output;
  }, []);
};

console.log(processInput(testInput));

exports.getManhatten = coOrds => {
  return 0;
};

module.exports = { processInput };
