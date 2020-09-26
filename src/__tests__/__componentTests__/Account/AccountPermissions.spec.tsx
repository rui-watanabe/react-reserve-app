import React from 'react';
import renderer from 'react-test-renderer';
import { testUserList } from '../../../../static/testUserList';
import AccountPermissions from '../../../components/Account/AccountPermissions';

const realUseState = React.useState;

jest
  .spyOn(React, 'useState')
  .mockImplementationOnce(
    () => realUseState(testUserList) as [unknown, React.Dispatch<unknown>],
  );

test('AccountPermissions', () => {
  const component = renderer.create(<AccountPermissions />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
