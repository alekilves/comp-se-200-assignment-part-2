import isLength from '../src/isLength';

describe('isLength', () => {
  test('should return true for valid lengths', () => {
    expect(isLength(3)).toBe(true);
  });

  test('should return false for invalid lengths', () => {
    expect(isLength(-1)).toBe(false);
    expect(isLength(1.5)).toBe(false);
    expect(isLength(Infinity)).toBe(false);
  });

  test('should return false for non-integer numbers', () => {
    expect(isLength(1.5)).toBe(false);
  });

  test('should return false for NaN', () => {
    expect(isLength(NaN)).toBe(false);
  });

  test('should return false for strings', () => {
    expect(isLength('3')).toBe(false);
  });

});