import React from 'react';
import { Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import cookie from 'js-cookie';
import catchErrors from '../../../utils/catchErrors';
import { AddProductToCartProps } from '../Types/ProductType';

function AddProductToCart({
  user,
  productId,
}: AddProductToCartProps): JSX.Element {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    //also unmount
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      const token = cookie.get('token');
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Input
      type="number"
      min="1"
      placeholder="Quantity"
      value={quantity}
      onChange={(event) => setQuantity(Number(event.target.value))}
      action={
        user && success
          ? {
              color: 'blue',
              content: 'Item Added!',
              icon: 'plus cart',
              disabled: true,
            }
          : user
          ? {
              color: 'orange',
              content: 'Add to Cart',
              icon: 'plus cart',
              loading,
              disabled: loading,
              onClick: handleAddProductToCart,
            }
          : {
              color: 'blue',
              content: 'Sign Up To Purchase',
              icon: 'signup',
              onClick: () => router.push('/signup'),
            }
      }
    />
  );
}

export default AddProductToCart;