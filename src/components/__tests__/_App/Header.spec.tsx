import React from 'react';
import renderer from 'react-test-renderer';
import { testUser } from '../../../../static/testData';
import Header from '../../_App/Header';

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

test('Header', () => {
  const component = renderer.create(<Header user={testUser} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
