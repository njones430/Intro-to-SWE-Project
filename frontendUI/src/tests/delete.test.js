const del = require('./delete');

test('creates a variable, and deletes it', () => {
  expect(del(5)).toBe(null);
  expect(del(9)).toBe(null);
});