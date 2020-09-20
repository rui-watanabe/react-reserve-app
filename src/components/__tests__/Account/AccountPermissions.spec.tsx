import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import { testUserList } from '../../../../static/testUserList';
import AccountPermissions from '../../Account/AccountPermissions';
import axios from 'axios';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => {
      Promise.resolve({ data: { ...testUserList } });
    }),
  };
});

test('AccountPermissions', async () => {
  const response = await axios.get('');
  console.log(response);
  const component = renderer.create(<AccountPermissions />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
