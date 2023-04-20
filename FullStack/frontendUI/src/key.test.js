const key = require('./key');

test('tests that email can be used as the key for storage', () => {
  expect(key("ksi@gmail.com")).toBe("ksi@gmail.comtesting");
  expect(key("test2@hotmail.com")).toBe("test2@hotmail.comtesting");
});