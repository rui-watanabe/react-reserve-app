import { ProductModelType } from '../../../models/Types/ProductType';

export interface ProductListProps {
  products: ProductModelType[];
}

export interface ProductPageNationProps {
  totalPages: number;
}
