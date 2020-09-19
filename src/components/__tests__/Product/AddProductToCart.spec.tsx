import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import { testUserList } from '../../../../static/testUserList';
import AddProductToCart from '../../Product/AddProductToCart';

test('AddProductToCart', () => {
  const component = renderer.create(
    <AddProductToCart
      user={testUserList[2]}
      productId={testProductList[0]._id}
    />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
