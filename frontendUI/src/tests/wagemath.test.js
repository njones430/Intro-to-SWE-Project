const wage = require('./wagemath');

test('wage per amount of time calculated correctly', () => {
  expect((wage(7, 7))).toBe(49);
  expect((wage(2, 40))).toBe(80);
});