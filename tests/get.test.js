import get from '../src/get.js';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get the value at the given path (string path)', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get the value at the given path (array path)', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return the default value if the path is not found', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should return the default value if the path is not found', () => {
    expect(get(object, ['a', 'b', 'c'], 'default')).toBe('default');
  });
});