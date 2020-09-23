import React from 'react';
import renderer from 'react-test-renderer';
import { testProduct } from '../../../static/testData';
import CreateProduct from '../../pages/create';

const realUseState = React.useState;

jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(
    () => realUseState(testProduct) as [unknown, React.Dispatch<unknown>],
  );

test('CreateProduct', () => {
  const component = renderer.create(<CreateProduct />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
