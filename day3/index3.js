const data = require('./day3-inputs.json');

const formatter = inputs => { // takes claims string and splits into array of formatted claim arrays
  return inputs.split(/\n/).map(input => {
    return input.match(/\d+/g);
  })
}

const fabricArrMaker = (dims) => { // makes an array of arrays containing '.' to the size provided
  const arr = [];
  for (let i = 0; i < dims; i++) {
    arr[i] = [];
  }
  arr.forEach((space, index) => {
    for (let i = 0; i < dims; i++) {
      space[i] = '.';
    }
  })
  return arr;
}

const overlapFinder = (claimsArr, fabricArr) => { // takes given arr of claims and populates given 
                                                  // fabric arr with each claim represented by claim
  let count = 0;                                  // number. 'x' represents overlapping claims.

  claimsArr.forEach(claim => {
    const rowStart = +claim[1];  // assign variables with each claim's coordinates
    const rowEnd = +claim[1] + +claim[3];
    const columnStart = +claim[2];
    const columnEnd = +claim[2] + +claim[4];
    
    for (let column = columnStart; column < columnEnd; column++) {
      for (let row = rowStart; row < rowEnd; row++) {
        if (fabricArr[column][row] === '.') {
          fabricArr[column][row] = claim[0];
        } else if (fabricArr[column][row].match(/[0-9]{1,4}/)) {
          fabricArr[column][row] = 'x';
          count++;
        }
      }
    }
  })
  console.log('Final overlap total > ', count);
  return fabricArr;
};

const claimsChecker = (claimsArr, fabricResult) => { // check each claim against marked fabric to see 
                                                     // any of its coordinates are marked with 'x'.
  let freeClaim;
  claimsArr.forEach(claim => {
    const rowStart = +claim[1];  // assign variables with each claim's coordinates
    const rowEnd = +claim[1] + +claim[3];
    const columnStart = +claim[2];
    const columnEnd = +claim[2] + +claim[4];
    let overlapping = false;

    while(!overlapping) {
      for (let column = columnStart; column < columnEnd; column++) {
        for (let row = rowStart; row < rowEnd; row++) {
          if (fabricResult[column][row] === 'x') {
            overlapping = true;
          }  
        }
      }
      if(!overlapping) {
        freeClaim = claim[0];
      }
      overlapping = true;
    }
  })
  console.log('Non-overlapped claim: ', freeClaim);
  return freeClaim;
};

const elvesClaims = formatter(data);
const elvesFabric = fabricArrMaker(1000);
const markedFabric = overlapFinder(elvesClaims, elvesFabric);

claimsChecker(elvesClaims, markedFabric);

module.exports = { overlapFinder, fabricArrMaker, formatter, claimsChecker };