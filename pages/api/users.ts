import User from '../../models/UserModel/User';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
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
    //$ne = not equal
    const users = await User.find({ _id: { $ne: userId } }).sort({
      role: 'asc',
    });
    res.status(200).json(users);
  } catch (errors) {
    console.error(errors);
    res.status(403).send('Please login again');
  }
};
