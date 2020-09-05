import { NextApiResponse } from 'next';

export const envVerify = (res: NextApiResponse, env: string | undefined) => {
  if (typeof env !== 'string') {
    return res.status(401).send('Not string type authorization token');
  }
};
