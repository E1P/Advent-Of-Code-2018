const { expect } = require("mocha");
const { testInput, input, processInput, getManhattan } = require("../day6/day6.js");

describe("Day6 Advent of Code", () => {
  describe("getManhatten", () => {
    it("Takes a pair of coordinates and returns the Manhatten distance between them", () => {
      expect(getManhattan(["0,0", "0,2"])).toBe(2);
    });
  });
});
