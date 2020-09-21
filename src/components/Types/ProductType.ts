import { ObjectId } from 'mongodb';
import { UserModelType } from '../../../models/Types/UserType';

export interface ProductAttributesProps {
  description: string;
  _id: ObjectId;
  user: UserModelType;
}

export interface ProductSummaryProps {
  name: string;
  mediaUrl: string;
  _id: ObjectId;
  price: number;
  sku: string;
  user: UserModelType;
}

export interface AddProductToCartProps {
  productId: ObjectId;
  user: UserModelType;
}
