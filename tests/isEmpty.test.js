import isEmpty from '../src/isEmpty.js'

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })
})