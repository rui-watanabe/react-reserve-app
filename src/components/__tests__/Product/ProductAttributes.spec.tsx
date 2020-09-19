import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import { testUserList } from '../../../../static/testUserList';
import ProductAttributes from '../../Product/ProductAttributes';

test('ProductAttributes', () => {
  const component = renderer.create(
    <ProductAttributes user={testUserList[2]} {...testProductList[0]} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
