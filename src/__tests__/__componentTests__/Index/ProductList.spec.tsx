import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import ProductList from '../../../components/Index/ProductList';

test('ProductList', () => {
  const component = renderer.create(<ProductList products={testProductList} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
