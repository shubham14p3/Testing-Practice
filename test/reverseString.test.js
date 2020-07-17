const reverseString = require("../src/reverseString");

test("Reverse a String", () => {
  expect(reverseString("ABCD")).toBe("DCBA");
});
