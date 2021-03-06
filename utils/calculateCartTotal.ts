import { CartProductType } from '../src/pagesTypes/CartType';

function calculateCartTotal(
  products: CartProductType,
): {
  cartTotal: number;
  stripeTotal: number;
} {
  const total = products.reduce((acc, el) => {
    acc += el.product.price * el.quantity;
    return acc;
  }, 0);
  const cartTotal = Number(((total * 100) / 100).toFixed(2));
  const stripeTotal = Number((total * 100).toFixed(2));
  return { cartTotal, stripeTotal };
}

export default calculateCartTotal;
