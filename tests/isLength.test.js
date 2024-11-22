import isLength from '../src/isLength';

describe('isLength', () => {
  test('should return true for valid lengths', () => {
    expect(isLength(3)).toBe(true);
  });
});