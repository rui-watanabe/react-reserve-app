import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../static/testData';
import Login from '../../pages/login';
test('Login', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

const realUseState = React.useState;

jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(
    () => realUseState(testUser) as [unknown, React.Dispatch<unknown>],
  );
test('Logined', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
