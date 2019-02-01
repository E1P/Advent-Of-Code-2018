const fs = require('fs');

fs.readFile('./day3-inputs.txt', 'utf8', (err, data) => {
  if (err) return err;
  else {
    const claims = data.split(/\n/);
    console.log(claims);

    function overlapFinder() {
      return "I'm a function";
    }


    module.exports = overlapFinder;
  }
})

