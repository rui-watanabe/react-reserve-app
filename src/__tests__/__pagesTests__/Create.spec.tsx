import React from 'react';
import renderer from 'react-test-renderer';
import CreateProduct from '../../pages/create';

test('CreateProduct', () => {
  const component = renderer.create(<CreateProduct />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
