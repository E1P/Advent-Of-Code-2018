const { expect } = require('chai');
const { chronologise, chronoLogs, hourTally, findSleepiest, finalTally } = require('../day4/index4.js');

xdescribe('Day 4', () => {
  describe('chronologise()', () => {
    it('will return all logs in chronological order by month and day', () => {
      const guardLogs = "[1518-06-12 00:00] Guard #3359 begins shift\n[1518-10-08 00:19] wakes up\n[1518-07-21 00:53] wakes up\n[1518-06-07 00:26] falls asleep\n[1518-07-01 00:50] wakes up";
      const orderedLogs = ['[1518-06-07 00:26] falls asleep', '[1518-06-12 00:00] Guard #3359 begins shift','[1518-07-01 00:50] wakes up', '[1518-07-21 00:53] wakes up', '[1518-10-08 00:19] wakes up'];
      expect(chronologise(guardLogs)).to.eql(orderedLogs);
    });
    it('will return all logs in chronological order by time', () => {
      const guardLogs = "[1518-03-22 00:45] falls asleep\n[1518-03-22 00:52] wakes up\n[1518-03-22 23:59] Guard #277 begins shift\n[1518-03-22 00:00] Guard #1231 begins shift";
      const orderedLogs = ['[1518-03-22 00:00] Guard #1231 begins shift', '[1518-03-22 00:45] falls asleep', '[1518-03-22 00:52] wakes up', '[1518-03-22 23:59] Guard #277 begins shift'];
      expect(chronologise(guardLogs)).to.eql(orderedLogs);
    });
  });
  describe('hourTally()', () => {
    it('should tally sleep data for a single guard\'s shift, with "0" for awake and "1" for asleep', () => {
      const guard1201mins = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:1,38:1,39:1,40:1,41:1,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:1,51:1,52:1,53:0,54:0,55:0,56:0,57:0,58:0,59:0};
      expect(hourTally(chronoLogs.slice(0, 7))).to.be.an('object');
      expect(hourTally(chronoLogs.slice(0, 1))).to.eql({1201: {}});
      expect(hourTally(chronoLogs.slice(0, 7))).to.eql({1201: guard1201mins});
    });
    it('should tally sleep data for two shifts of a single guard', () => {
      const guard1201shiftsX2 = chronoLogs.slice(0, 7).concat(chronoLogs.slice(29, 32));
      const guard1201X2shiftMins = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:2,26:2,27:2,28:1,29:1,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:1,38:1,39:1,40:1,41:1,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:1,51:1,52:1,53:0,54:0,55:0,56:0,57:0,58:0,59:0};
      expect(hourTally(guard1201shiftsX2)).to.be.an('object');
      expect(hourTally(guard1201shiftsX2.slice(0, 1))).to.eql({1201: {}});
      expect(hourTally(guard1201shiftsX2)).to.eql({1201: guard1201X2shiftMins});
    });
  });
  describe('findSleepiest()', () => {
    it('should return an array of arrays containing guard, first sleepiest day and number of times asleep on given day', () => {
      const guard1201shiftsX2 = chronoLogs.slice(0, 7).concat(chronoLogs.slice(29, 32));
      const guard1201shiftTally = hourTally(guard1201shiftsX2);
      expect(findSleepiest(guard1201shiftTally)).eql([['1201', '25', 2, 27]]);
    });
  });
  describe('Check against example data', () => {
    it('should give same answers as example', () => {
      const logs = '[1518-11-01 00:00] Guard #10 begins shift\n[1518-11-01 00:05] falls asleep\n[1518-11-01 00:25] wakes up\n[1518-11-01 00:30] falls asleep\n[1518-11-01 00:55] wakes up\n[1518-11-01 23:58] Guard #99 begins shift\n[1518-11-02 00:40] falls asleep\n[1518-11-02 00:50] wakes up\n[1518-11-03 00:05] Guard #10 begins shift\n[1518-11-03 00:24] falls asleep\n[1518-11-03 00:29] wakes up\n[1518-11-04 00:02] Guard #99 begins shift\n[1518-11-04 00:36] falls asleep\n[1518-11-04 00:46] wakes up\n[1518-11-05 00:03] Guard #99 begins shift\n[1518-11-05 00:45] falls asleep\n[1518-11-05 00:55] wakes up';
      console.log(logs.split(/\n/g));
      console.log(findSleepiest(hourTally(chronologise(logs))));
    });
  });
});