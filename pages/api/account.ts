import User from '../../models/UserModel/User';
import jwt, { VerifyCallback } from 'jsonwebtoken';
import connectDB from '../../utils/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    case 'PUT':
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  //!req.headers.authorization
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
    const user = await User.findOne({ _id: userId });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).send('User not found');
    }
  } catch (error) {
    res.status(403).send('Invalid token');
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const { _id, role } = req.body;
  await User.findOneAndUpdate({ _id }, { role });
  res.status(204).send('User updated');
}
