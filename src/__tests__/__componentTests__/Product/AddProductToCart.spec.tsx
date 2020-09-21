import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import { testProductList } from '../../../../static/testProductList';
import AddProductToCart from '../../../components/Product/AddProductToCart';

test('AddProductToCart', () => {
  const component = renderer.create(
    <AddProductToCart user={testUser} productId={testProductList[0]._id} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
