const capitalize = require("../src/capitalize");

test('Return Capatilized String', () => {
  expect(capitalize('cyrus')).toBe('Cyrus');
});