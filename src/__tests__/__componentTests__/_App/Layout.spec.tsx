import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../../components/_App/Layout';
import { testUser } from '../../../../static/testData';

jest.mock('next/router', () => ({
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));
test('Layout', () => {
  const component = renderer.create(<Layout user={testUser} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
