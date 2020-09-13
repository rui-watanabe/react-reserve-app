import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import ProductPagination from '../components/Index/ProductPagination';
import baseUrl from '../../utils/baseUrl';
import { NextPageContext } from 'next';
import { homeProps } from '../pagesTypes/IndexType';

function Home({ products, totalPages }: homeProps): JSX.Element {
  return (
    <>
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const page = ctx.query.page ? ctx.query.page : '1';
  const size = 9;
  const payload = { params: { page, size } };
  //fetch data on server
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url, payload);
  return response.data;
  //return response data as an object(this object will be merged with existing props )
};

export default Home;
