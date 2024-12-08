import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('does not change the rest of the string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
  test('handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });
  test('handles strings with only one character', () => {
    expect(capitalize('a')).toBe('A');
  });
  test('handles strings with only one capitalized character', () => {
    expect(capitalize('A')).toBe('A');
  });

});