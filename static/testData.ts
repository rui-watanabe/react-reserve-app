import { ProductModelType } from '../models/Types/ProductType';
import { UserModelType } from '../models/Types/UserType';
import { CartProductType } from '../src/pagesTypes/CartType';
import { testProductList } from './testProductList';
import { testUserList } from './testUserList';

export const testProduct: ProductModelType = testProductList[0];

export const testTotalPages = Math.floor(testProductList.length / 9);

export const testUser: UserModelType = testUserList[2]; // 'user' role user

export const testCartProductList: CartProductType = [
  { product: { ...testProduct }, quantity: 1 },
  { product: { ...testProductList[1] }, quantity: 2 },
  { product: { ...testProductList[2] }, quantity: 3 },
];
