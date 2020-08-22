import React from 'react';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import { Header } from './Header';
import { HeadContent } from './HeadContent';
import { HeaderProps } from './HeaderType';

export function Layout({
  children,
  user,
}: React.PropsWithChildren<HeaderProps>) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>MernWithTsApp</title>
      </Head>
      <Header user={user} />
      <Container text style={{ paddingTop: '1em' }}>
        {children}
      </Container>
    </>
  );
}
