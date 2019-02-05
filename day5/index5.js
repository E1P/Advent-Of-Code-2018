const data = require('./day5-input.json');

const polymerDestroyer = input => {
  
  const recursiveDestruct = string => {
    let foundStar = false;
    let stringLength = string.length;
    if (!stringLength) return 0;
    if (stringLength === 1) return 1;
    for (let i = 0; string[i+1] !== undefined; i++) {
      let char1 = string[i].charCodeAt(0);
      let char2 = string[i+1].charCodeAt(0);
      if (char1 === char2 + 32 || char1 === char2 - 32) {
        if (stringLength === 2) return 0;
        string = string.slice(0, i) + '*' + string.slice(i+1);
        foundStar = true;
        i+=1;
      }
    }
    string = string.replace(/\*./g, '');
    if (foundStar) return recursiveDestruct(string);
    else {
      return string.length;
    }
  };
  return recursiveDestruct(input);
}

const unitRemover = input => {
  const polymerVersions = [];
  let polymer;
  for(let i = 65; i < 91; i++) {
    let regex = new RegExp(String.fromCharCode(i), 'gi');
    polymer = input.replace(regex, '');
    polymerVersions.push(polymerDestroyer(polymer));
  }
  return Math.min(...polymerVersions);
} 

console.log('Shortest polymer length = ', unitRemover(data));

module.exports = { polymerDestroyer}