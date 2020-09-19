import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../index';
import { testProductList, testTotalPages } from '../../../static/testData';

test('Home', () => {
  const component = renderer.create(
    <Home products={testProductList} totalPages={testTotalPages} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
