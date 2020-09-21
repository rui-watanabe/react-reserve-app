import { ObjectId } from 'mongodb';
import { OrderModelType } from '../../models/Types/OrderType';
import { UserModelType } from '../../models/Types/UserType';

export interface AccountProps {
  user: UserModelType;
  orders: OrderModelType[];
}

export interface userIdInterface {
  userId: ObjectId;
}

declare module 'jsonwebtoken' {
  export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions,
  ): { userId: ObjectId };
}
