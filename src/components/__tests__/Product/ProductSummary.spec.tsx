import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import { testUserList } from '../../../../static/testUserList';
import ProductSummary from '../../Product/ProductSummary';

test('ProductSummary', () => {
  const component = renderer.create(
    <ProductSummary user={testUserList[2]} {...testProductList[0]} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
