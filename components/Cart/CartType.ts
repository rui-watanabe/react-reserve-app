import { UserModelType } from '../../models/UserModel/UserType';
import { CartProductType } from '../../pagesType/CartType';
import { Token } from 'react-stripe-checkout';

type handleCheckoutFuncType = (token: Token) => void;
type handleRemoveFromCart = (productId: string) => void;

export interface CartItemListProps {
  products: CartProductType;
  user: UserModelType;
  handleRemoveFromCart: handleRemoveFromCart;
  success: boolean;
}

export interface CartSummaryProps {
  products: CartProductType;
  handleCheckout: handleCheckoutFuncType;
  success: boolean;
}
