import React from 'react';
import renderer from 'react-test-renderer';
import ProductList from '../../Index/ProductList';
import { ProductModelType } from '../../../../models/Types/ProductType';

const testProductList: ProductModelType[] = [
  {
    _id: '11111',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Bernie Gledhill',
    price: 1399.02,
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    sku: '594-54-9502',
    mediaUrl:
      'https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush.jpg',
  },
];

test('ProductList', () => {
  const component = renderer.create(<ProductList products={testProductList} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
