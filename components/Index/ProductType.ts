import { ProductModelType } from '../../models/ProductModel/ProductType';

export interface ProductListProps {
  products: ProductModelType[];
}

export interface ProductPageNationProps {
  totalPages: number;
}
