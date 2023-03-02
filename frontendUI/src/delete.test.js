const del = require('./create');

test('creates a variable, and deletes it', () => {
  expect(del(5)).toBe(NaN);
});