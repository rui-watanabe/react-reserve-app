import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import { testProductList } from '../../../../static/testProductList';
import ProductSummary from '../../../components/Product/ProductSummary';

test('ProductSummary', () => {
  const component = renderer.create(
    <ProductSummary user={testUser} {...testProductList[0]} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
