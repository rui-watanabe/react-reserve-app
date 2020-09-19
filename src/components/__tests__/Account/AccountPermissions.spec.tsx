import React from 'react';
import renderer from 'react-test-renderer';
import AccountPermissions from '../../Account/AccountPermissions';

test('AccountPermissions', () => {
  const component = renderer.create(<AccountPermissions />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
