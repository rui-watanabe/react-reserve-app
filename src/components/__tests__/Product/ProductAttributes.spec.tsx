import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import { testProductList } from '../../../../static/testProductList';
import ProductAttributes from '../../Product/ProductAttributes';

test('ProductAttributes', () => {
  const component = renderer.create(
    <ProductAttributes user={testUser} {...testProductList[0]} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
