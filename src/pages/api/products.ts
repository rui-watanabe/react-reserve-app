import Product from '../../../models/ProductModel/Product';
import connectDB from '../../../utils/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';

connectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { page, size } = req.query;
  // Convert querystring values to number
  const pageNum = Number(page);
  const pageSize = Number(size);
  let products = [];
  const totalDocs = await Product.countDocuments();
  const totalPages = Math.ceil(totalDocs / pageSize);
  if (pageNum === 1) {
    products = await Product.find().limit(pageSize);
  } else {
    const skips = pageSize * (pageNum - 1);
    products = await Product.find().skip(skips).limit(pageSize);
  }
  // const products = await Product.find();
  res.status(200).json({ products, totalPages });
};
