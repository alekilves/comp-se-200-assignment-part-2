import words from '../src/words.js';

describe('words', () => {
  test('splits string into words with default pattern', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('splits string into words with custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('returns entire string as one word when pattern does not split string', () => {
    expect(words('fred')).toEqual(['fred']);
  });

  test('returns empty array when string is empty', () => {
    expect(words('')).toEqual([]);
  });
});