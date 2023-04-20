const wage = require('./wage');

test('hourly wage calculated properly', () => {
  expect(Number(wage(5, 40).toFixed(2))).toBe(0.13);
  expect(Number(wage(10, 60).toFixed(2))).toBe(0.17);
});