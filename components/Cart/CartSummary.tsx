import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Segment, Divider, Message } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';
import { CartSummaryProps } from './CartType';

function CartSummary({ products, handleCheckout, success }: CartSummaryProps) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);
  let stripeKey: string;

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  if (typeof process.env.STRIPE_PUBLIC_KEY === 'string') {
    stripeKey = process.env.STRIPE_PUBLIC_KEY;
  } else {
    stripeKey = '';
  }

  return stripeKey != '' ? (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong> ${cartAmount}
        <StripeCheckout
          name="MernNextApp"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency="USD"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          token={handleCheckout}
          stripeKey={stripeKey}
          triggerEvent="onClick"
        >
          <Button
            icon="cart"
            disabled={isCartEmpty || success}
            color="teal"
            floated="right"
            content="Checkout"
          />
        </StripeCheckout>
      </Segment>
    </>
  ) : (
    <Message negative>
      <Message.Header>We`re sorry we can`t apply that discount</Message.Header>
      <p>Setting ENV error!</p>
    </Message>
  );
}

export default CartSummary;
