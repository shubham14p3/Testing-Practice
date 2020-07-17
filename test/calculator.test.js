const Calculator = require('../src/calculator.js');

test('calculator function', () => {
  const calc = new Calculator(8, 4);
  expect(calc.add()).toBe(12);
  expect(calc.substract()).toBe(4);
  expect(calc.multiply()).toBe(32);
  expect(calc.divide()).toBe(2);
});
