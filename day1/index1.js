const fs = require('fs');

fs.readFile('./day1-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;

  let finalFreq = data.split('\n').reduce((sum, value) => {
    return sum += +value;
  }, 0);
  console.log(`The final freq is ${finalFreq}.`);
  
  let dataArr = data.split('\n').slice(0, -1);
  
  const freqArr = [];
  let firstRepeat = null;
  let found = false;
  let currentFreq;
  let count = 0;
  
  const processor = (startFreq, input) => {
    currentFreq = input.reduce((sum, value) => {

      if (freqArr.includes(sum) && !found) {
        firstRepeat = sum;
        found = true;
      }  
      freqArr.push(sum);
      return sum += +value;
    }, startFreq);

    if (!found) {
      count++;
      console.log('loop number: ', count);
      processor(currentFreq, dataArr);
    }  
    else console.log(`The first repeated freq is ${firstRepeat}.`);
  }
  processor(0, dataArr);
  
});