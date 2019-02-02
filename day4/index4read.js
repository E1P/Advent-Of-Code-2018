const fs = require('fs');

fs.readFile('day4-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {
    fs.writeFile('day4-inputs.json', JSON.stringify(data), (err) => {
      if (err) console.log('FAIL')
      else console.log('DONE');
    })
  }
})