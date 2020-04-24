import App from "next/app";
import Layout from "../components/_App/Layout"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }){
//各コンポーネント.getInitialPropsで指定したオブジェクトのデータがctxに入る
    let pageProps = {};

//非同期でサーバーにレンダリング
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
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
