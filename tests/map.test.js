import map from '../src/map';

describe('map', () => {
  test('should map array values using the iteratee function', () => {
    function square(n) {
      return n * n;
    }
    const result = map([4, 8], square);
    expect(result).toEqual([16, 64]);
  });

  test('should map array values using the iteratee function', () => {
    const result = map([{ 'a': 1 }, { 'a': 2 }], item => item.a);
    expect(result).toEqual([1, 2]);
  });

  test('should map array values using the iteratee function', () => {
    const result = map([{ 'a': 1 }, { 'a': 2 }], item => [item.a]);
    expect(result).toEqual([[1], [2]]);
  });

  test('should return undefined for properties that do not exist', () => {
    const result = map([{ 'a': 1 }, { 'b': 2 }], item => item.c);
    expect(result).toEqual([undefined, undefined]);
  });
});