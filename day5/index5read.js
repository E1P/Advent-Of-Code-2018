const fs = require('fs');

fs.readFile('./day5-input.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {
    fs.writeFile('./day5-input.json', JSON.stringify(data), err => {
      if (err) return err;
      else console.log('Day 5 input file written');
    })
  }  
})