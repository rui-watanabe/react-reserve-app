import cookie from 'js-cookie';
import Router from 'next/router';
import { Token } from 'react-stripe-checkout';
import { NextPageContext } from 'next';

export function handleLogin(token: Token): void {
  cookie.set('token', token);
  Router.push('/account');
}

export function redirectUser(ctx: NextPageContext, location: string): void {
  if (ctx.req && ctx.res) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

export function handleLogout(): void {
  cookie.remove('token');
  window.localStorage.setItem('logout', String(Date.now()));
  Router.push('/login');
}
