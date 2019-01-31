const fs = require('fs');

fs.readFile('./day2-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {
    const boxIDs = data.split(/\n\s*/);
    let count2 = 0;
    let count3 = 0;
    letterObj = boxIDs.reduce((acc, id) => {
      for(let letter of id){
        acc[letter] = (acc[letter] || 0) + 1;
      }
      if (Object.values(acc).includes(2)) count2++;
      if (Object.values(acc).includes(3)) count3++;
      acc = {};
      return acc;
    }, {});
    console.log(count2, count3);
    
    //----------- PART 2 ------------------

    const stringCompare = (str1, str2) => {
      let diff = 0;
      let index;
      for(let i = 0; i < str1.length; i++){
        if (str1[i] !== str2[i]) {
          diff++;
          index = i;
        }  
      }
      if (diff === 1) {
        return str1.slice(0, index) + str1.slice(index + 1);
      }  
    }
    const compareThemAll = arr => {
      let result = [];
      let comparison;
      arr.forEach((ID, index) => {
        for(i = index; i < arr.length -2 && result.length === 0; i++){
          comparison = stringCompare(ID, arr[i+1]);
          if (comparison) result.push(comparison);
        }

      })
      return result[0];
    }
    console.log(compareThemAll(boxIDs));
  }
})