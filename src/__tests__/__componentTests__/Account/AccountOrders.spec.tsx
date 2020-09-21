import React from 'react';
import renderer from 'react-test-renderer';
import { testOrdersList } from '../../../../static/testOrdersList';
import AccountOrders from '../../../components/Account/AccountOrders';

test('AccountOrders', () => {
  const component = renderer.create(<AccountOrders orders={testOrdersList} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
