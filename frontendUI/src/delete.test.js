const del = require('./create');

test('creates a variable, and deletes it', () => {
  expect(del(5)).toBe(NaN);
  expect(del(9)).toBe(NaN);
});