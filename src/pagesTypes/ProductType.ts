import { ProductModelType } from '../../models/Types/ProductType';
import { UserModelType } from '../../models/Types/UserType';

export interface ProductProps {
  product: ProductModelType;
  user: UserModelType;
}

export interface ProductInitialProps {
  query: {
    _id: string;
  };
}
