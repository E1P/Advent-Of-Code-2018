const fs = require('fs');

fs.readFile('./day3-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {

    fs.writeFile('./day3-inputs.json', JSON.stringify(data), (err) => {
      if (err) console.log('FAIL')
      else console.log('DONE')
    })
  }
})