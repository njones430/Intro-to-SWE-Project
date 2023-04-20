const logout = require('./logout');

test('tests if program handles switching users properly', () => {
  expect(logout("Jake", 4, "Jim")).toBe(null);
  expect(logout("Jake", 10, "Jake")).toBe("10");
});