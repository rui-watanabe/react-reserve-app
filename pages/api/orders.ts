import Order from '../../models/OrderModel/Order';
import jwt from 'jsonwebtoken';
import connectDB from '../../utils/connectDb';
import { NextApiResponse, NextApiRequest } from 'next';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!('authorization' in req.headers)) {
      return res.status(401).send('Not defined authorization token');
    } else if (typeof req.headers.authorization !== 'string') {
      return res.status(401).send('Not string authorization token type');
    }
    const { userId } = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
    );
    const orders = await Order.find({ user: userId })
      .sort({ createdAt: 'desc' })
      .populate({
        path: 'products.product',
        model: 'Product',
      });
    res.status(200).json({ orders });
  } catch (errors) {
    console.error(errors);
    res.status(403).send('Please login again');
  }
};
