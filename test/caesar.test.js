import caesar from '../src/caesar';

test('Return an encrypted string', () => {
  expect(caesar('abc', 1)).toBe('bcd');
});
