import Stripe from 'stripe';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';
import Cart from '../../../models/CartModel/Cart';
import Order from '../../../models/OrderModel/Order';
import calculateCartTotal from '../../../utils/calculateCartTotal';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY));

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { paymentData } = req.body;

  if (!('authorization' in req.headers)) {
    return res.status(401).send('Not defined authorization token');
  } else if (typeof req.headers.authorization !== 'string') {
    return res.status(401).send('Not string authorization token type');
  }

  try {
    // 1) Verify and get user id from token
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
    );
    // 2) Find cart based on user id, populate it
    const cart = await Cart.findOne({ user: userId }).populate({
      path: 'products.product',
      model: 'Product',
    });
    // 3) Calculate cart totals again from cart products
    const { cartTotal, stripeTotal } = calculateCartTotal(cart.products);
    // 4) Get email from payment data, see if email linked with existing Stripe customer
    const prevCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1,
    });
    // 5) If not existing customer, create them based on their email
    const isExistingCustomer = prevCustomer.data.length > 0;
    let newCustomer;
    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.email,
        source: paymentData.id,
      });
    }
    const customer =
      (isExistingCustomer && prevCustomer.data[0].id) || newCustomer?.id;
    // 6) Create charge with total, send receipt email
    // const charge = await stripe.charges.create(
    //   {
    //     currency: 'usd',
    //     amount: stripeTotal,
    //     receipt_email: paymentData.email,
    //     customer,
    //     description: `Checkout | ${paymentData.email} | ${paymentData.id}`,
    //   },
    //   {
    //     idempotency_key: uuid.v4(),
    //   },
    // );
    await stripe.charges.create(
      {
        currency: 'usd',
        amount: stripeTotal,
        receipt_email: paymentData.email,
        customer,
        description: `Checkout | ${paymentData.email} | ${paymentData.id}`,
      },
      {
        idempotency_key: uuid.v4(),
      },
    );
    // 7) Add order data to database
    await new Order({
      user: userId,
      email: paymentData.email,
      total: cartTotal,
      products: cart.products,
    }).save();
    // 8) Clear products in cart
    await Cart.findOneAndUpdate({ _id: cart._id }, { $set: { products: [] } });
    // 9) Send back success (200) response
    res.status(200).send('Checkout Successful!');
  } catch (errors) {
    console.error(errors);
    res.status(500).send('Error processing charge');
  }
};
