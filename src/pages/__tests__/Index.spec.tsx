import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../index';
import { testTotalPages } from '../../../static/testData';
import { testProductList } from '../../../static/testProductList';

test('Home', () => {
  const component = renderer.create(
    <Home products={testProductList} totalPages={testTotalPages} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
