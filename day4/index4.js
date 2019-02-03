const data = require('./day4-inputs.json');

const chronologise = input => {
  return input.split(/\n/g).sort((a, b) => {
    const aTime = a.match(/(?<=-)\d+|(?<=\s)\d+|(?<=:)\d+/g).join('');
    const bTime = b.match(/(?<=-)\d+|(?<=\s)\d+|(?<=:)\d+/g).join('');
    return aTime - bTime;
  })
};

const orderedLogs = chronologise(data);
console.log(orderedLogs);

module.exports = { chronologise };

// [1518-06-12 00:00] Guard #3359 begins shift