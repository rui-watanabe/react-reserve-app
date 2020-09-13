import { UserModelType } from '../models/Types/UserType';
import { ProductModelType } from '../models/Types/ProductType';

export type CartProductType = {
  quantity: number;
  product: ProductModelType;
}[];

export interface CartProps {
  products: CartProductType;
  user: UserModelType;
}
