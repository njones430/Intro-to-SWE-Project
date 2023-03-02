const sum = require('./create');

test('numerical inputs add up to 10', () => {
  expect(sum(2, 2, 2, 2, 2)).toBe(10);
});