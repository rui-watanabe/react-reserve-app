import React from 'react';
import renderer from 'react-test-renderer';
import { testProductList } from '../../../../static/testProductList';
import ProductPagination from '../../../components/Index/ProductPagination';

jest.mock('next/router', () => ({
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
test('ProductPagination', () => {
  const component = renderer.create(
    <ProductPagination totalPages={Math.floor(testProductList.length / 9)} />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
