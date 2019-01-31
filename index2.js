const fs = require('fs');

fs.readFile('./day2-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {
    const boxIDs = data.split(/\n\s*/);
    // console.log('data: ', data);
    // console.log('array: ', boxIDs);
    let count2 = 0;
    let count3 = 0;
    // console.log(boxIDs);
    letterObj = boxIDs.reduce((acc, id) => {
      console.log(`--${id}--`);
      for(let letter of id){
        console.log(typeof letter)
        acc[letter] = (acc[letter] || 0) + 1;
      }
      if (Object.values(acc).includes(2)) count2++;
      if (Object.values(acc).includes(3)) count3++;
      acc = {};
      return acc;
    }, {});

    console.log(count2, count3);
  }
})