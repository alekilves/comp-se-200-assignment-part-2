import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  test('returns the value if it is not null or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('returns the default value if the value is undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });
});
