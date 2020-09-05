import { UserModelType } from '../models/UserModel/UserType';
import { OrderModelType } from '../models/OrderModel/OrderType';

export interface AccountProps {
  user: UserModelType;
  orders: OrderModelType[];
}

export interface userIdInterface {
  userId: string;
}

declare module 'jsonwebtoken' {
  export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions,
  ): { userId: string };
}
