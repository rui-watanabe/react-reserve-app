import React from 'react';
import renderer from 'react-test-renderer';
import { testCartProductList, testUser } from '../../../static/testData';
import Cart from '../cart';

test('Cart', () => {
  const component = renderer.create(
    <Cart products={testCartProductList} user={testUser} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
