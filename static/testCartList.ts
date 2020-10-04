import { CartProductType } from '../src/pagesTypes/CartType';
import { testProductList } from './testProductList';

export const testCartList: CartProductType = [
  {
    quantity: 1,
    product: testProductList[0],
  },
  {
    quantity: 2,
    product: testProductList[1],
  },
];
