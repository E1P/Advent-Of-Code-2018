const data = require('./day3-inputs.json');

const formatter = inputs => {
  return inputs.split(/\n/).map(input => {
    return input.match(/\d+/g);
  })
}

const fabricArrMaker = (dims) => {
  const arr = [];
  arr.length = dims;
  arr.fill([]);
  arr.forEach((space, index) => {
    for (let i = 0; i < dims; i++) {
      space[i] = '-';
    }
  })
  return arr;
}


const overlapFinder = (claimsArr, fabricArr) => {

  let count = 0;
  let multiOverlap = 0;
  let sqInches = 0;
  
  fabricArr.forEach(column => {
    column.forEach(row => {
      sqInches++
    })
  });

  claimsArr.forEach(claim => {
    const rowStart = +claim[1];
    const rowEnd = +claim[1] + +claim[3];
    const columnStart = +claim[2];
    const columnEnd = +claim[2] + +claim[4];
    
    // console.log(claim[0], rowStart, rowEnd, columnStart, columnEnd);
    for (let column = columnStart; column < columnEnd; column++) {
      for (let row = rowStart; row < rowEnd; row++) {
        if (fabricArr[column][row] === '-') {
          // console.log(fabricArr[column][row], column, row);
          fabricArr[column][row] = 'o';
        } else if (fabricArr[column][row] === 'o') {
          fabricArr[column][row] = 'X';
          count++;
        } else if (fabricArr[column][row] = 'X') {
          multiOverlap++;
        }
      }
    }
  })
  console.log('Final overlap total > ', count, '- sqInches: ', sqInches, '- multi: ', multiOverlap);
}

const elvesClaims = formatter(data);
const elvesFabric = fabricArrMaker(1000);

overlapFinder(elvesClaims, elvesFabric);

module.exports = { overlapFinder, fabricArrMaker, formatter };

// #23 @ 301,282: 28x15