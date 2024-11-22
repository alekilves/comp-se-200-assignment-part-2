import eq from '../src/eq';

describe('eq function', () => {
  test('compares two identical objects', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBe(true);
  });

  test('compares two different objects with same properties', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
  });
});