import { UserModelType } from '../models/UserModel/UserType';
import { ProductModelType } from '../models/ProductModel/ProductType';

export type CartProductType = {
  quantity: number;
  product: ProductModelType;
}[];

export interface CartProps {
  products: CartProductType;
  user: UserModelType;
}
