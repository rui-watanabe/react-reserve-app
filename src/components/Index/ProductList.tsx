import React from 'react';
import { Card } from 'semantic-ui-react';
import { ProductListProps } from '../Types/IndexType';
import { ProductModelType } from '../../../models/Types/ProductType';

function ProductList({ products }: ProductListProps): JSX.Element {
  function mapProductsToItems(products: ProductModelType[]) {
    return products.map((product) => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'teal',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`,
    }));
  }

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapProductsToItems(products)}
    />
  );
}

export default ProductList;
