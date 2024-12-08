import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  test('returns the value if it is number', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('returns the value if it is text', () => {
    expect(defaultTo('hello', 10)).toBe('hello');
  });

  test('returns the default value if the value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('returns the default value if the value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

});
