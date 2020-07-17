const analyze = require("../src/analyze");

test("Returns an object with average, min, max, and length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
