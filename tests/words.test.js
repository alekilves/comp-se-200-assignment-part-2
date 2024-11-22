import words from '../src/words.js';

describe('words', () => {
  test('splits string into words with default pattern', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });
});