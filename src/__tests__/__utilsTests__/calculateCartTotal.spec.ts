import { testCartList } from '../../../static/testCartList';
import calculateCartTotal from '../../../utils/calculateCartTotal';

describe('calculateCartTotal.ts Functions TestCases', () => {
  it('should return the calculated value', () => {
    const result = calculateCartTotal(testCartList);
    const expected = {
      cartTotal: 4598.88,
      stripeTotal: 459888,
    };

    expect(result).toStrictEqual(expected);
  });
});
