const year = require('./yearmath');

test('yearly income calculated properly', () => {
  expect(Number(year(5, 5, 5, 5, 5).toFixed(2))).toBe(190);
  expect(Number(year(10, 5, 1, 0, 12).toFixed(2))).toBe(-58);
});