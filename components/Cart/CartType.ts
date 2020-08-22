import { Token } from 'react-stripe-checkout';
import { ProductModelType } from '../../models/ProductModel/ProductType';
import { UserModelType } from '../../models/UserModel/UserType';

type handleRemoveFromCart = (productid: string) => void;
type handleCheckoutFuncType = (token: Token) => void;

export type CartProductsType = {
  quantity: number;
  product: ProductModelType;
}[];

export interface CartItemListProps {
  products: CartProductsType;
  user: UserModelType;
  handleRemoveFromCart: handleRemoveFromCart;
  success: boolean;
}

export interface CartSummaryProps {
  products: {
    product: ProductModelType;
  }[];
  user: UserModelType;
  handleCheckout: handleCheckoutFuncType;
  success: boolean;
}
