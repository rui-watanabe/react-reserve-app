import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../pages/login';

test('Login', () => {
  const component = renderer.create(<Login />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
