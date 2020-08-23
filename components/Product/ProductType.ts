import { UserModelType } from '../../models/UserModel/UserType';

export interface ProductAttributesProps {
  description: string;
  _id: string;
  user: UserModelType;
}

export interface ProductSummaryProps {
  name: string;
  mediaUrl: string;
  _id: string;
  price: number;
  sku: string;
  user: UserModelType;
}

export interface AddProductToCartProps {
  productId: string;
  user: UserModelType;
}
