import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import { testUserList } from '../../../../static/testUserList';
import ProductAttributes from '../../Product/ProductAttributes';

test('ProductAttributes', () => {
  const component = renderer.create(
    <ProductAttributes
      description={testProductList[0].description}
      _id={testProductList[0]._id}
      user={testUserList[2]}
    />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
