import Product from '../../../models/ProductModel/Product';
import connectDB from '../../../utils/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';
// import faker from 'faker';
// import { ProductModelType } from '../../../models/Types/ProductType';
// import { ObjectId } from 'mongodb';

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

  // take in products from faker
  // if (products.length > 0 && products.length !== pageSize) {
  //   products = await createFakeData(products);
  // }
  // products = createFakeData(products);
  // const totalPages = Math.ceil(totalDocs / pageSize);
  // const products = await Product.find();
  res.status(200).json({ products, totalPages });
};

// function createFakeData(products: ProductModelType[]) {
//   let i;
//   for (i = products.length; i < 9; ++i) {
//     products.push({
//       _id: new ObjectId('000000000000000000000000'),
//       name: faker.commerce.productName(),
//       price: Number(faker.commerce.price()),
//       sku: faker.random.uuid(),
//       description: faker.commerce.productDescription(),
//       mediaUrl: faker.image.imageUrl(),
//     });
//   }
//   console.log(products);
//   return products;
// }
