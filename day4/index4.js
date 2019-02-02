const data = require('./day4-inputs.json');

const chronologise = input => {
  return input.split(/\n/g).sort((a, b) => {
    const aTime = a.match(/\d+/g);
    const bTime = b.match(/\d+/g);
      // *Time[1] = month, [2] = date, [3] = hour, [4] = minute;
    if (aTime[1] !== bTime[1]) {
      return aTime[1] - bTime[1];
    } else if (aTime[2] !== bTime[2]) {
      return aTime[2] - bTime[2];
    } else if (aTime[3] !== bTime[3]) {
      return aTime[3] - bTime[3];
    } else {
      return aTime[4] - bTime[4];
    }
  })
};

const orderedLogs = chronologise(data);
console.log(orderedLogs);

module.exports = { chronologise };