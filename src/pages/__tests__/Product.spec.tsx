import React from 'react';
import renderer from 'react-test-renderer';
import Product from '../product';
import { testUser, testProduct } from '../../../static/testData';

test('Product', () => {
  const component = renderer.create(
    <Product product={testProduct} user={testUser} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
