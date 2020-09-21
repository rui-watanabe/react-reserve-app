import { UserModelType } from '../../../models/Types/UserType';
import { CartProductType } from '../../pagesTypes/CartType';
import { Token } from 'react-stripe-checkout';
import { ObjectId } from 'mongodb';

type handleCheckoutFuncType = (token: Token) => void;
type handleRemoveFromCart = (productId: ObjectId) => void;

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
