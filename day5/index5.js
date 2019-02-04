const data = require('./day5-input.json');

count = 0;

const recursiveDestruct = input => {
  count++;
  console.log(count);
  const inputLength = input.length;
  if (!inputLength) return 0;
  if (inputLength === 1) return 1;
  for (let i = 0; i < inputLength-1; i++) {
    let char1 = input[i].charCodeAt(0);
    let char2 = input[i+1].charCodeAt(0);
    if (char1 === char2 + 32 || char1 === char2 - 32) {
      if (inputLength === 2) return 0;
      let slicedInput;
      if (i === inputLength -2) {
        slicedInput = input.slice(0, i);
      } else {
        slicedInput = input.slice(0, i) + input.slice(i+2);
      }
      return recursiveDestruct(slicedInput);
    }
  }
  return inputLength;
}

console.log('Final length = ', recursiveDestruct(data))

module.exports = { recursiveDestruct }