const edit = require('./edit');

test('sets a variable and changes it to another variable', () => {
  expect(edit(1, 2)).toBe("2");
  expect(edit(12345, 19)).toBe("19");
});