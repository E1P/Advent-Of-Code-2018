const data = require('./day4-inputs.json');

const chronologise = input => {
  return input.split(/\n/g).sort((a, b) => {
    const aTime = a.match(/(?<=-)\d+|(?<=\s)\d+|(?<=:)\d+/g).join('');
    const bTime = b.match(/(?<=-)\d+|(?<=\s)\d+|(?<=:)\d+/g).join('');
    return aTime - bTime;
  })
};

const hourTally = logArr => {
  let guard;
  let minute = 0;
  let asleep = false;
  const guardZZs = {};
  logArr.forEach((logItem, index) => {
    if (/Guard/.test(logItem)) { // if log contains 'guard', it must be shift start log
      minute = 0; // reset minute for start of shift
      asleep = false;  // make sure asleep variable starts ar false
      guard = logItem.match(/(?<=#)\d+/)[0]; // if logItem shows guard starting, record guard number
      if (!guardZZs[guard]) guardZZs[guard]= {}; 
    } else { // if log text doesn't include guard it must be a sleep state log
      for (let t = minute; t < 60 && t < +logItem.match(/(?<=:)\d+/)[0]; t++) { // count from minute until time in log
        if (!asleep) guardZZs[guard][t] = (guardZZs[guard][t] || 0); // if awake, add 0
        else guardZZs[guard][t] = (guardZZs[guard][t] || 0) + 1; // if asleep, add 1
        minute++; // minute variable increments total minutes using closure
      }
      asleep = !asleep; // change sleep state due to for loop reaching time of next log
      if (!logArr[index+1] || /Guard/.test(logArr[index+1])) { // if not at end of hour and next log is shift start, fill remaining minutes with current state
        for (minute; minute < 60; minute++) {
          guardZZs[guard][minute] = (guardZZs[guard][minute] || 0);
        };
      }; 
    }
  })
  return guardZZs;
};

const findSleepiest = tally => {
  const tallyArr = []
  for (let guard in tally) {
    let sleepyMax = [guard, 0, 0, 0]; // [1]: hour most asleep, [2]: times asleep at that hour [3]: total hours asleep
    let total = 0;
    for (let hour in tally[guard]) {
      total += tally[guard][hour];
      if (tally[guard][hour] > sleepyMax[2]) {
        sleepyMax[1] = hour;
        sleepyMax[2] = tally[guard][hour]; 
      }
    }
    sleepyMax[3] = total;
    tallyArr.push(sleepyMax);
  } 
  return tallyArr;
}

const chronoLogs = chronologise(data);
const finalTally = hourTally(chronoLogs);
const sleepMaxArr = findSleepiest(finalTally);

console.log(sleepMaxArr);

module.exports = { chronologise, chronoLogs, hourTally, findSleepiest, finalTally };