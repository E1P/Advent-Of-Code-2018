const { testInput, input, processInput, getManhattan } = require("../day6/day6.js");

describe("Day6 Advent of Code", () => {
  describe("processInput()", () => {
    it("takes a string of coordinates and splits then into an array", () => {
      expect(processInput("0, 1 2, 2")).toEqual([[0, 1], [2, 2]]);
    });
  });

  describe("getManhatten", () => {
    it("Takes a pair of coordinates and returns the Manhatten distance between them", () => {
      expect(getManhattan([[0, 1], [0, 3]])).toBe(2);
      expect(getManhattan([[3, 5], [1, 4]])).toBe(3);
    });
  });
});
