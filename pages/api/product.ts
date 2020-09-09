import Product from '../../models/ProductModel/Product';
import Cart from '../../models/CartModel/Cart';
import connectDB from '../../utils/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';

//to connect absolutely(post request after DB connect)
connectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'POST':
      await handlePostRequest(req, res);
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
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  //posted by pages/create.js,handleSubmit
  const { name, price, description, mediaUrl } = req.body;
  try {
    if (!name || !price || !description || !mediaUrl) {
      return res.status(422).send('Product missing one or more fields');
    }
    const product = await new Product({
      name,
      price,
      description,
      mediaUrl,
    }).save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error in creating product');
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { _id } = req.query;
  try {
    // 1) Delete product by id
    await Product.findOneAndDelete({ _id });
    // 2) Remove product all carts, referenced as 'product'
    await Cart.updateMany(
      { 'products.product': _id },
      { $pull: { products: { product: _id } } as any },
    );
  } catch (errors) {
    console.error(errors);
    res.status(500).send('Error deleting product');
  }
  res.status(204).json({});
}
