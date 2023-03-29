const math = require('./budgetmath');

test('monthly income calculated properly', () => {
  expect(Number(math(5, 5, 5, 5, 5).toFixed(2))).toBe(14.17);
  expect(Number(math(10, 5, 1, 0, 12).toFixed(2))).toBe(-4.83);
});