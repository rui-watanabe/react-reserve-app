import { testCartList } from '../../static/testCartList';
import calculateCartTotal from '../calculateCartTotal';

describe('calculateCartTotal.ts Functions TestCases', () => {
  it('should return the calculated value', () => {
    const result = calculateCartTotal(testCartList);
    const expected = {
      cartTotal: 1,
      stripeTotal: 1,
    };

    expect(result).toStrictEqual(expected);
  });
});
