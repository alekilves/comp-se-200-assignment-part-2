import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  test('should return true for empty array', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('should return false for string', () => {
    expect(isEmpty("string")).toBe(false)
  })

  test('should return false for array', () => {
    expect(isEmpty([1, 3])).toBe(false)
  })
})