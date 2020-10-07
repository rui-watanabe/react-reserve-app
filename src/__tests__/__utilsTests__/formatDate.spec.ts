import formatDate from '../../../utils/formatDate';

describe('cformatDate.ts Functions TestCases', () => {
  it('should return the formatDate', () => {
    const result = formatDate(new Date(2020, 4, 1, 12, 30, 45));
    const expected = '5/1/2020';

    expect(result).toStrictEqual(expected);
  });
});
