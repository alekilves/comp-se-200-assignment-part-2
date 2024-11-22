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
});