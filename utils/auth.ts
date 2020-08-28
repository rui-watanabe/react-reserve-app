import cookie from 'js-cookie';
import Router from 'next/router';
import { Token } from 'react-stripe-checkout';
import { NextPageContext } from 'next';

export function handleLogin(token: Token) {
  cookie.set('token', token);
  Router.push('/account');
}

export function redirectUser(ctx: NextPageContext, location: string) {
  if (ctx.req && ctx.res) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove('token');
  window.localStorage.setItem('logout', String(Date.now()));
  Router.push('/login');
}
