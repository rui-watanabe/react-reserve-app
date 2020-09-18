import React from 'react';
import renderer from 'react-test-renderer';
import Signup from '../signup';

test('Signup', () => {
  const component = renderer.create(<Signup />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
