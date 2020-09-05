import { ProductModelType } from '../models/ProductModel/ProductType';
import { UserModelType } from '../models/UserModel/UserType';

export interface ProductProps {
  product: ProductModelType;
  user: UserModelType;
}

export interface ProductInitialProps {
  query: {
    _id: string;
  };
}
