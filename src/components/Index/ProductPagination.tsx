import React from 'react';
import { useRouter } from 'next/router';
import { Container, Pagination } from 'semantic-ui-react';
import { ProductPageNationProps } from '../Types/IndexType';

function ProductPagination({
  totalPages,
}: ProductPageNationProps): JSX.Element {
  const router = useRouter();
  return (
    <Container textAlign="center" style={{ margin: '2em' }}>
      {console.log(router)}
      <Pagination
        defaultActivePage={router.query.page ? Number(router.query.page) : 1}
        totalPages={totalPages}
        onPageChange={(event, data) => {
          data.activePage === 1
            ? router.push('/')
            : router.push(`/?page=${data.activePage}`);
        }}
      />
    </Container>
  );
}

export default ProductPagination;
