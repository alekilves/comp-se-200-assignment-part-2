import map from '../src/map';

describe('map', () => {
  test('should map array values using the iteratee function', () => {
    function square(n) {
      return n * n;
    }
    const result = map([4, 8], square);
    expect(result).toEqual([16, 64]);
  });
});