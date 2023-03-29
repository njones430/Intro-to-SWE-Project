const sum = require('./create');

test('numerical inputs add up to 10', () => {
  expect(sum(2, 2, 2, 2, 2)).toBe(10);
  expect(sum(5, 100, 0, 0, 2)).toBe(107);
});