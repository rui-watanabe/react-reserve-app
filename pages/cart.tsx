import React from 'react';
import { Segment } from 'semantic-ui-react';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';
import { parseCookies } from 'nookies';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import cookie from 'js-cookie';
import catchErrors from '../utils/catchErrors';
import { CartProps } from '../pagesType/CartType';
import { NextPageContext } from 'next';
import { ProductModelType } from '../models/ProductModel/ProductType';
import { Token } from 'react-stripe-checkout';

function Cart({ products, user }: CartProps) {
  const [cartProducts, setCartProducts] = React.useState(products);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleRemoveFromCart(productId: string) {
    const url = `${baseUrl}/api/cart`;
    const token = cookie.get('token');
    const payload = {
      params: { productId },
      headers: { Authorization: token },
    };
    const response = await axios.delete(url, payload);
    setCartProducts(response.data);
  }

  async function handleCheckout(paymentData: Token) {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/checkout`;
      const token = cookie.get('token');
      const payload = { paymentData };
      const headers = { headers: { Authorization: token } };
      await axios.post(url, payload, headers);
      setSuccess(true);
    } catch (errors) {
      catchErrors(errors, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Segment loading={loading}>
      <CartItemList
        handleRemoveFromCart={handleRemoveFromCart}
        user={user}
        products={cartProducts}
        success={success}
      />
      <CartSummary
        products={cartProducts}
        handleCheckout={handleCheckout}
        success={success}
      />
    </Segment>
  );
}

Cart.getInitialProps = async (ctx: NextPageContext) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { products: [] };
  }
  const url = `${baseUrl}/api/cart`;
  const payload = { headers: { Authorization: token } };
  const response = await axios.get<{ products: ProductModelType[] }>(
    url,
    payload
  );
  return { products: response.data };
};

export default Cart;
