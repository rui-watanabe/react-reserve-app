import connectDB from '../../utils/connectDb';
import User from '../../models/UserModel/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

connectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { email, password } = req.body;
  try {
    // 1) check to see if a user exits with the provided email(+password is previous fields)
    const user = await User.findOne({ email }).select('+password');
    // 2) --if not, return error
    if (!user) {
      return res.status(404).send('No user exits with that email');
    }
    // 3) check to see if users' password matches the one in db
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // 4) --if so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
      // 5) send that token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send('Passwords do not match');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in user');
  }
};
