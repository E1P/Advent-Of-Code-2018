const { expect } = require('chai');
const { chronologise } = require('../day4/index4.js');

describe.only('Day 4', () => {
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
});