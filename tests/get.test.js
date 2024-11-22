import get from '../src/get.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get the value at the given path (string path)', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });
});