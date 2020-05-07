import App from "next/app";
import Layout from "../components/_App/Layout";
import { parseCookies } from 'nookies';
import { redirectUser } from '../utils/auth';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }){
//各コンポーネント.getInitialPropsで指定したオブジェクトのデータがctxに入る
    const { token } = parseCookies(ctx);

    let pageProps = {};

//非同期でサーバーにレンダリング
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }

    if(!token){
      const isProtectedRoute = 
        ctx.pathname === '/account' || ctx.pathname === '/create';
      if(isProtectedRoute){
        redirectUser(ctx, '/login');
      }
    }

//this is an object and return props
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp;
