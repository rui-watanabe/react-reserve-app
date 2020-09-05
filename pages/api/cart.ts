import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Cart from '../../models/CartModel/Cart';
import connectDB from '../../utils/connectDb';
import { NextApiResponse, NextApiRequest } from 'next';
import { CartModelType } from '../../models/CartModel/CartType';

connectDB();

const { ObjectId } = mongoose.Types;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'PUT':
      await handlePutRequest(req, res);
      break;
    case 'DELETE':
      await handleDeleteRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('Not defined authorization token');
  } else if (typeof req.headers.authorization !== 'string') {
    return res.status(401).send('Not string authorization token type');
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const cart: CartModelType = await Cart.findOne({ user: userId }).populate({
      //find product information from unique product id
      path: 'products.product',
      model: 'Product',
    });
    res.status(200).json(cart.products);
  } catch (errors) {
    console.error(errors);
    res.status(403).send('Please login again');
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const {
    quantity,
    productId,
  }: { quantity: number; productId: string } = req.body;

  let isObjectId = true;

  if (!('authorization' in req.headers)) {
    return res.status(401).send('Not defined authorization token');
  } else if (typeof req.headers.authorization !== 'string') {
    return res.status(401).send('Not string authorization token type');
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // Get user cart based on userId
    const cart: CartModelType = await Cart.findOne({ user: userId });
    // Check if product already exists in cart
    const productExists = cart.products.some((document) => {
      typeof document.product === 'string'
        ? ObjectId(productId).equals(document.product)
        : (isObjectId = false);
    });
    if (!isObjectId) {
      return res.status(401).send('Not string product`s objectId type');
    }
    // if so, increment quantity (by number provided to request)
    if (productExists) {
      await Cart.findOneAndUpdate(
        { _id: cart._id, 'products.product': productId },
        { '$inc?': { 'products.$.quantity': quantity }  }
      );
    } else {
      // if not, add new product with given quantity
      const newProduct = { quantity, product: productId };
      await Cart.findOneAndUpdate(
        { _id: cart._id },
        { $addToSet: { products: newProduct } as {}}
      );
    }
    res.status(200).send('Cart Updated');
  } catch (errors) {
    console.error(errors);
    res.status(403).send('Please login again');
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;

  if (!('authorization' in req.headers)) {
    return res.status(401).send('Not defined authorization token');
  } else if (typeof req.headers.authorization !== 'string') {
    return res.status(401).send('Not string authorization token type');
  }

  try {
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { '$pull?': { products: { product: productId } }},
      { new: true }
    ).populate({
      path: 'products.product',
      model: 'Product',
    });
    res.status(200).json(cart.products);
  } catch (errors) {
    console.error(errors);
    res.status(403).send('Please login again');
  }
}
