import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import ProductPagination from '../../../components/Index/ProductPagination';

test('ProductPagination', () => {
  const component = renderer.create(
    <ProductPagination totalPages={Math.floor(testProductList.length / 9)} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
