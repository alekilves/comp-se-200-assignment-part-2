import filter from '../src/filter';

describe('filter', () => {
  test('filters array based on predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('returns an empty array when no elements match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  test('returns the same array when all elements match the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual(users);
  });

  test('works with an empty array', () => {
    const users = [];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([[]]);
  });

  test('works with different data types', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).toEqual([2, 4]);
  });
});