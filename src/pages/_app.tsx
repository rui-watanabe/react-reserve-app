import App, { AppContext } from 'next/app';
import { Layout } from '../components/_App/Layout';
import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../../utils/auth';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import Router from 'next/router';

interface userProps {
  user?: any;
}

class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<{ pageProps: userProps }> {
    //(component).getInitialProps props ctx
    const { token } = parseCookies(ctx);

    let pageProps: userProps = {};

    //rendering at server
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute =
        ctx.pathname === '/account' || ctx.pathname === '/create';
      if (isProtectedRoute) {
        redirectUser(ctx, '/login');
      }
    } else {
      try {
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/account`;
        const response = await axios.get(url, payload);
        const user = response.data;
        const isRoot = user.role === 'root';
        const isAdmin = user.role === 'admin';
        // if authenticated, but not of role 'admin' or 'root', redirect from '/create' page
        const isNotPermitted =
          !(isRoot || isAdmin) && ctx.pathname === '/create';
        if (isNotPermitted) {
          redirectUser(ctx, '/');
        }
        pageProps.user = user;
      } catch (error) {
        console.error('Error getting current user', error);
        // 1) Throw out invalid token
        destroyCookie(ctx, 'token');
        // 2) Redirect to login
        redirectUser(ctx, '/login');
      }
    }

    //this is an object and return props
    return { pageProps };
  }

  componentDidMount(): void {
    window.addEventListener('storage', this.syncLogout);
  }

  syncLogout = (event: StorageEvent): void => {
    if (event.key === 'logout') {
      console.log('logged out from storage');
      Router.push('/login');
    }
  };

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
