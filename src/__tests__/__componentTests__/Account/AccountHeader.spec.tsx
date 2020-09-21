import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import AccountHeader from '../../../components/Account/AccountHeader';

test('AccountHeader', () => {
  const component = renderer.create(<AccountHeader {...testUser} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
